// task_2/js/main.ts

interface DirectorInterface {
    WorkFromHome(): string;
    getCoffeeBreak(): string;
    WorkDirectorTasks(): string;
}

interface TeacherInterface {
    WorkFromHome(): string;
    getCoffeeBreak(): string;
    WorkTeacherTasks(): string;
}

class Director implements DirectorInterface {
    WorkFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    WorkDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    WorkFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    WorkTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }

    return new Director();
}
