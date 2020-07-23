export interface Logger {
    Log();
}

export class BaseLogger implements Logger{
    Log(){}
}

export class ConsoleLogger extends BaseLogger{
    Log(){
        console.log('Console Logger');
    }
}

export class DBLogger extends BaseLogger{
    Log(){
        console.log('DB Logger');
    }
}
