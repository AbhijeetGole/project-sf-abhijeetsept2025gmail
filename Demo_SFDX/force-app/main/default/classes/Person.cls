// global variable - it's not secured
// Integer population = 0;

public class Person {
    // We want this to be a class variable rather than instance variable
    // public Integer population = 0;
    // // class variable - memory get allocated only once per class and not per instance / object
    private static Integer population;
    
	private String name;
    private Integer age;
    
    // CTOR - Constructor
    // Blank Constructor
    public Person(){
        System.debug('Blank Constructor called!');
        this.name='default';
        // Instance Data Member
        this.age = 10;
        // Class Variable
        Person.population++;
    }
    
    // Parameterised Constructor
    public Person(String name,Integer age){
        System.debug('Parameterized Constructor called!');
        this.name = name;
        this.age = age;
        Person.population++;
    }
    /*
    The instance initialization code in a class is executed each time an object is instantiated from that class. These code blocks run before the constructor.

    If you don’t want to write your own constructor for a class, you can use an instance initialization code block to initialize instance variables. In simple situations, use an ordinary initializer. Reserve initialization code for complex situations, such as initializing a static map.
    */
    /*// initialization block 1
    {
        System.debug('Inside initialization block 1 !');
        this.name = 'Ashish';
        Person.population++;
    }
    
    // initialization block 2
    {
        System.debug('Inside initialization block 2 !');
        this.age = 22;
    }*/
    
    // static block is there to initialize static variable
    // get executed only once for a class
    /*Similar to other static code, a static initialization code block is only initialized one time on the first use of the class.

    A class can have any number of either static or instance initialization code blocks. They can appear anywhere in the code body. The code blocks are executed in the order in which they appear in the file 
    */
       // static block
    static{
        System.debug('Inside static block!');
        Person.population = 0;
    }
    
    public void setPerson(String nm, Integer ag){
    	this.name = nm;
        this.age = ag;
    }
    public String getPerson(){
        return this.name+' '+this.age;
    }
    
    public static Integer getPopulationCount(){
        return Person.population;
    }
}