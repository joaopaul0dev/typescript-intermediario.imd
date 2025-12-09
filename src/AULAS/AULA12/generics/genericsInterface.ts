interface genericTest<T> {
    test(arg: T): T;
}

class Test1 implements genericTest<number> {
    test(arg: number): number {
        return arg;
    }
}

class Test2 implements genericTest<string> {
    test(arg: string): string {
        return arg;
    }
}   