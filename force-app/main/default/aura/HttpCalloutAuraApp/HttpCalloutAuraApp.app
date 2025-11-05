<aura:application extends="force:slds">
    <div class="slds-grid slds-wrap">
        <div class="slds-col slds-size_1-of-2">
            <c:HttpCalloutAuraComp />
        </div>
        <div class="slds-col slds-size_1-of-2">
            <!-- <c:foreignExchangeRates /> -->
            <c:exchangeRateViewer />
        </div>
    </div>
</aura:application>