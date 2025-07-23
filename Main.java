//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        System.out.printf("Hello and welcome!");

        for (int i = 1; i <= 5; i++) {
            //TIP Press <shortcut actionId="Debug"/> to start debugging your code. We have set one <icon src="AllIcons.Debugger.Db_set_breakpoint"/> breakpoint
            // for you, but you can always add more by pressing <shortcut actionId="ToggleLineBreakpoint"/>.
            System.out.println("i = " + i);
        }
    }

}
//springboot is also a module of sppring which makes development easy
//it provides easy to run stand alone production based app
//makes configuration service eeverythig easy
//sprin + embedded server-configuration krdega
//jo conf xml n all hata dega ye kam krdegaa
//configure karne ki need nhi convention over configuration is used here
//it have opiniated auto configure method
//it scan classpath and i found dependency it will autoconfigure it
//jese jpa appi database tk le jata toh ye scan krke auto configure krega annotation and xml ki need nahi hai
//no need to deploy war files as tomcat auto installed
//jar jeneral files se kaam hojayega war web based dalne ki garaj nahi hai
//starter project object model(pom)
//starter web lagao jese springboot starter data jpa ya springboot starter security jo kaamm vo
//fir auto configure hokr sbkuch milega apn ko xm n all krne ki grj nhi hai
//whenn we add all jars usme ek meta inf/spring factories hoti jisme sb hotsa agr apni dependency database h toh voh active
//need ke hisaab se class active
//,maven is build tool manages dependencies
//plugins to pack code into jar and war
//java parent  mtlb vo btata kisse inherit krna hai
//jab ham mvn run krenge toh target  milega fir ek command fir ek project ki jar file milegi
//plugins repackkaging krti normal jar fir usme dependencies pack fir purani ko original name dete hai
//ioc inversion of control mtlb ye iske paas puri class ab ham khud nhi banare issemangre control iske haath me hai ab
//ioc and application context ek hi baat hai
//springbootapplication ye bean mtlb isme componentscan autoconfigure and enableautoconfigure sb hota hai
//@component wali hi ioc me jayegi kyuki vhi beans hai
//request mapping puri class par mapping add kardega
//mongodb install then mongosh
//cmd net start mongodb
//use school
//show collections
//db.students.insertOne({})
//show collections
//db.students.find()
//db.students.deleteone()
//orm object relational mapping
//agr ham operation karenge apni class par to mysql ki table me operation hoga mtlb orm is techniwue to connect with database and map objects easily
//it is the method which uses oops concepts and maps user class to colomn in user table making it easy to delete update create sql
//orm framework like hibernate
//set of rules req by persistance provider to achieve orm is jpa java persistane provider
//orm achieve krne ke liye kuch follow krne pdte jpa rule persistance mtlb permanent
//or mtlb process jpa rule follow hota krta kon connect hibernate eclipselink openjpa ye sb connect krte peristance provider hai
//spring jpa matlb easy banata sb kuch
//mongo db is non relational and all thi things are for relational
//so mongodb have a bydefault persistance spring provider which connects and make evrything look easier
//only dependency add karni hai apan ko
//query method dsl and criteria api are 2 methods to interact with database and when using spring data jpa for sql and sppring mongo db for nosql
//mongo db ke liye spring data mongodb and for sql spring data jpa mongodb dont need persistance provider like hybernate and all
//controller endpoints banate hai katha service me likhte hai business logic nd all vhi likte katha controller end point bana ke services ko cll karti
//mongo db ki dependency pomxml me likho fir applicationproperties me spring.data.mongodb.port
//spring.data.mongodb.port, spring.data.mongodb.database
//spring.data.mongodb.username and spring.data .mongodb.password when authentification is there
//controllers creaate endpoints and database n connect krne ke liyekatha jo hogi ye controllers services ko bulayenge
//to services package me services file and ab ek repo naam ki bhi interface ek package banani padengi
//controller endpoint banake service ko call krega service repo ko
//ab bydefault mono ek interface hoti jo apnne apni repo interface banayi usko exted krdo mongo ke by defauklt interface se
//mongorepository mtlb sab kuch hota hai isme already built  methods crud operations easy bnata
//generic pas karo
//ab entrycontroller me orm krna pdenga map krna pdenga use document annotation
//id ko @Id krke likkho annotation
//ab process ye hai ki service repo ko lega usme bhejega and comntrolller service me bhejega
//logic oops pe depend hai return type n all bhi dhyaando encapsulation getters and setters and class banana sbkuc huse hora function kese chalte
//if else ye vo dsam logic everything using
//response entity
//agar kuch req bheje to client ko pta kese chslega ky hora kya galti hori to http code de skte usse  pata chalega
//they are 3 digit codes return with response to check status
//200 means okay
//starting from 1 is informational means u sent the req and server will proceed
//200 okay processed and server will return the data
//201 means new created you sent req and new entry being created like post
//204 mtlb req is succesful but no return body like deletion deleter hue baad response body nahi hoti hai
//starting from 3 tells that further actions are needed to take to achieve the result
//301 mtlb jese getbyid toh ye api badal chuki hai permanently changed
//302 temporarily changed
//304 catched url
//4 se start hone wali
//400 means bad request aapne galti kii
//401 mtlb you need to provide authentification credentials to request anauthorised
//404 not found
//403 you are forbidden you are authenticated still dont have permission
//starting from 5 server ki galti
//500 means server error internal
//502 bad gateway server acting as a proxy or gateway recieved error from an upstrreeam server /
//503 service unailable serer temperory maintainance na ll ki vjh se cant proceed the request
//we can send this using response entity it is class of spring framework helpss to send http responses
//lambok means library in java ecosystem which helps to reduce boiler plate code in springboot applications
//jesse journalentry entity isme voh getters and setters ki vjh se complex lgra to lambok apneaap krta and clean and clear rkhta hai codes ko apna
//getters setters hta do lombok depedency add krdo annotation dedo usko sb apne aap kardega voh
//no args constructor all args constructor tostring sb krke dedega no tension ek extra pluggin bhi install karni padengi appko
//@data annotation se getter setter allargconstructor sb aajayenge
//generated methods are part of compile class files