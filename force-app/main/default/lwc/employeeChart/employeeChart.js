import { LightningElement, wire } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import ChartJS from '@salesforce/resourceUrl/ChartJS';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EmployeeChart extends LightningElement {
  chart;
  chartJsInitialized = false;
  employeeData = [];

  @wire(CurrentPageReference) pageRef;

  connectedCallback() {
    registerListener('employeelistupdate', this.handleEmployeeList, this);
  }

  disconnectedCallback() {
    unregisterAllListeners(this);
  }

  renderedCallback() {
    if (this.chartJsInitialized) return;
    this.chartJsInitialized = true;

    loadScript(this, ChartJS)
      .then(() => {
        this.renderChart();
      })
      .catch(error => {
        console.error('ChartJS load error:', error);
      });
  }

  handleEmployeeList(payload) {
    this.employeeData = payload;
    this.renderChart();
  }

  renderChart() {
    if (!window.Chart || !this.employeeData.length) return;

    const roleCounts = this.aggregateRoles(this.employeeData);
    const ctx = this.template.querySelector('canvas').getContext('2d');

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(roleCounts),
        datasets: [{
          data: Object.values(roleCounts),
          backgroundColor: ['#0070d2', '#00a1e0', '#f4b400', '#34a853', '#ea4335']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  aggregateRoles(data) {
    return data.reduce((acc, emp) => {
      acc[emp.role] = (acc[emp.role] || 0) + 1;
      return acc;
    }, {});
  }
}