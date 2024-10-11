//task_5/js/main.ts

interface MaiorCredits {
    credits: number;
}

interface MinorCredits {
    credits: number;
}

function sumMajorCredits(subject1: MaiorCredits, subject2: MaiorCredits): number {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
}