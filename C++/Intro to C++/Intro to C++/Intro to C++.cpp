// Intro to C++.cpp : This file contains the 'main' function. Program execution begins and ends there.
// this is how you comment

#include <iostream>

int main()
{
    std::cout << "Hello World!\n"; // print in C++ basically
    // always end with ;
    int x; // defining a variable
    int a, b; // defining multiple variables (of the same type)
    //int a, int b; is wrong (compiler error)
    int c; // no intializer
    double d; // correct and recommended, easier to read
    a = 5; 
    b = 7;
    c = 11;
    d = 1.1;
    int score = a + b; // how to add, also another way to intialize
    int e(10); // other way to intialize
    int f{ 8 }; // different way to intialize
    std::cout << score << "\n" << e+f;  //how to 'chain'
}

/* this is how you comment multiple lines
    variable types, like a flowchart (gotta define them before declaring)
    int = integers (int in python)
    double = float (float in python)
    char = characters (1 char, nothing in python) 
    string = sequence of characters (str in python)
    bool = boolean (bool)
*/