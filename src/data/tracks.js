export const initialTracks = [
  { key: 'java', name: 'Java', pillClass: 'pill-java', fee: 39, chapters: 6, hasContent: true },
  { key: 'c', name: 'C', pillClass: 'pill-c', fee: 39, chapters: 4, hasContent: true },
  { key: 'cpp', name: 'C++', pillClass: 'pill-cpp', fee: 39, chapters: 6, hasContent: true },
  { key: 'python', name: 'Python', pillClass: 'pill-python', fee: 59, chapters: 5, hasContent: true }
];

// EDIT SYLLABUS HERE.
// Every track has a "parts" array (e.g. one part per chapter, or per semester).
// Each part has: key, title, and a "topics" array (max 5 topics per part - they map onto
// the 5 fixed mind-map node positions).
// Each topic can have:
//   heading  - title in the theory panel
//   body     - a short, plain-language intro paragraph
//   steps    - an array of { point, example } - point is the explanation,
//              example is a short concrete illustration shown right under it
//   code     - an optional full code sample shown in a code box
//   videos   - an array of { label, url } - shown as "Recommended videos" under that topic

export const syllabus = {
  java: {
    parts: [
      {
        key: 'ch1',
        title: 'Chapter 1 — Introduction to Java',
        topics: [
          { key: 'history', label: 'History of Java', heading: 'History of Java',
            body: 'Java did not appear overnight - it grew out of a real engineering problem at Sun Microsystems in the early 1990s.',
            steps: [
              { point: 'In 1991, a team at Sun Microsystems led by James Gosling was building software for smart consumer electronics (like set-top boxes).',
                example: 'Example: think of a 1990s interactive cable TV box that needed small, reliable programs to run its on-screen menus.' },
              { point: 'They needed one program to run on many different chips without being rewritten each time - existing languages like C++ could not do this easily.',
                example: 'Example: the same remote-control software would otherwise need a separate version written for every different chip.' },
              { point: 'The team built a new language, first called "Oak", designed around one core idea: compile once, run anywhere.',
                example: 'Example: Oak was later renamed because another company already used that name for a product.' },
              { point: 'In 1995, it was renamed Java and released publicly, and it quickly became popular for building web applets and enterprise software.',
                example: 'Example: early Java "applets" let a webpage show a small interactive animation directly inside a 1990s browser.' },
              { point: 'Today Java runs on billions of devices - from Android phones to banking servers - because that original "run anywhere" design still works.',
                example: 'Example: the Android apps on your phone are built using Java (or Kotlin, which also runs on the JVM).' }
            ],
            videos: [
              { label: 'Search: "history of Java explained simple"', url: 'https://www.youtube.com/results?search_query=history+of+java+explained+simple' }
            ] },
          { key: 'jvm', label: 'JVM · JRE · JDK', heading: 'JVM · JRE · JDK - the three letters that confuse every beginner',
            body: 'These three terms build on top of each other like layers - once you see the order, they stop being confusing.',
            steps: [
              { point: 'JDK (Java Development Kit) - this is what you install to WRITE Java code. It includes a compiler (javac) and everything a developer needs.',
                example: 'Example: installing "JDK 21" on your laptop is what lets you type javac Hello.java in a terminal.' },
              { point: 'JRE (Java Runtime Environment) - this is what you need to RUN a Java program (but not write one). It sits inside the JDK.',
                example: 'Example: a user who only wants to play a Java-based desktop game needs just the JRE, not the full JDK.' },
              { point: 'JVM (Java Virtual Machine) - this is the actual engine, inside the JRE, that reads compiled code and executes it line by line.',
                example: 'Example: the JVM is why a .class file compiled on Windows can be run unchanged on a Mac.' },
              { point: 'Order to remember: JDK contains JRE, and JRE contains JVM - like a box inside a box inside a box.',
                example: 'Example: JDK > JRE > JVM, similar to a toolbox (JDK) containing a power drill (JRE) which contains its motor (JVM).' },
              { point: 'This is exactly why Java is portable: the JVM is different for each operating system, but it always understands the same compiled bytecode.',
                example: 'Example: a company can write one Java billing program and deploy it unchanged on both Linux servers and Windows desktops.' }
            ],
            videos: [
              { label: 'Search: "JVM JRE JDK difference CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=jvm+jre+jdk+difference+codewithharry' }
            ] },
          { key: 'features', label: 'Key features', heading: 'Key features of Java',
            body: 'Java became popular because of a specific set of design choices, not by accident.',
            steps: [
              { point: 'Platform-independent - code compiled once (into .class bytecode) runs on Windows, macOS or Linux without changes.',
                example: 'Example: a Hello.class file compiled on a Windows laptop runs without changes on a Linux server.' },
              { point: 'Object-oriented - everything is organized around "objects" that bundle data and behavior together, which keeps large programs manageable.',
                example: 'Example: a "BankAccount" object can bundle a balance (data) together with a "withdraw" action (behavior).' },
              { point: 'Automatic memory management - a background process called the "garbage collector" frees memory you are no longer using, so you rarely have to do it by hand.',
                example: 'Example: once a BankAccount object is no longer used anywhere in the program, Java frees its memory on its own.' },
              { point: 'Strongly typed - the compiler catches many mistakes (like mixing text and numbers incorrectly) before the program even runs.',
                example: 'Example: writing int age = "twenty"; won\'t even compile, because Java catches that mismatch immediately.' },
              { point: 'Huge ecosystem - millions of existing libraries and frameworks (like Spring) mean you rarely build everything from scratch.',
                example: 'Example: instead of writing your own email-sending code, you can use the existing JavaMail library.' }
            ],
            videos: [
              { label: 'Search: "features of Java Apna College"', url: 'https://www.youtube.com/results?search_query=features+of+java+apna+college' }
            ] },
          { key: 'first', label: 'First Java program', heading: 'Your first Java program, line by line',
            body: 'Every Java program, no matter how big, starts execution from one specific method called main. Here is the smallest complete program, explained piece by piece:',
            steps: [
              { point: 'public class Hello - defines a "class" named Hello. In Java, all code must live inside a class.',
                example: 'Example: the file itself must be saved as Hello.java - matching the class name exactly.' },
              { point: 'public static void main(String[] args) - this exact line is the entry point; the JVM looks for this method first and starts running from here.',
                example: 'Example: running java Hello starts execution at this line, even if the class has other methods defined.' },
              { point: 'System.out.println("...") - this is how you print text to the screen; "println" means "print line".',
                example: 'Example: System.out.println("2+2="+(2+2)); prints 2+2=4 to the screen.' },
              { point: 'The semicolon ; at the end of the line tells Java "this instruction is complete".',
                example: 'Example: forgetting the ; after println("Hello") causes a compile error pointing at that exact line.' },
              { point: 'The curly braces { } mark where a block of code starts and ends - one pair for the class, one pair for the method.',
                example: 'Example: every opening { in this small program has a matching closing } - two pairs total.' }
            ],
            code: 'public class Hello {\n  public static void main(String[] args) {\n    System.out.println("Hello, Skillverse!");\n  }\n}',
            videos: [
              { label: 'Search: "first Java program tutorial for beginners"', url: 'https://www.youtube.com/results?search_query=first+java+program+tutorial+for+beginners' }
            ] },
          { key: 'compile', label: 'Compilation flow', heading: 'What actually happens when you run a Java program',
            body: 'Java uses a two-step process that is different from purely compiled or purely interpreted languages - this is the real secret behind "write once, run anywhere".',
            steps: [
              { point: 'Step 1 - You write code and save it as Hello.java (the source code, in plain text).',
                example: 'Example: naming it hello.java (lowercase) still works on most systems, but convention keeps it capitalized to match the class name.' },
              { point: 'Step 2 - You run the compiler: javac Hello.java. This checks your code for errors and converts it into Hello.class (bytecode) - not directly into machine code.',
                example: 'Example: running javac Hello.java creates a new file called Hello.class in the same folder.' },
              { point: 'Step 3 - Bytecode is a universal format that no specific computer understands directly - it is a middle language made for the JVM.',
                example: 'Example: opening a .class file in a plain text editor shows unreadable symbols - it is meant for the JVM, not humans.' },
              { point: 'Step 4 - You run the program: java Hello. The JVM on your machine reads the bytecode and translates it into instructions your specific computer/OS understands, on the fly.',
                example: 'Example: typing java Hello (no .class extension) tells the JVM to load and run Hello.class.' },
              { point: 'Step 5 - Because every operating system has its own JVM, but bytecode looks the same everywhere, the same .class file runs unchanged on Windows, Mac or Linux.',
                example: 'Example: emailing your Hello.class file to a friend on a Mac lets them run it directly, with no changes.' }
            ],
            videos: [
              { label: 'Search: "how Java compilation works JVM bytecode"', url: 'https://www.youtube.com/results?search_query=how+java+compilation+works+jvm+bytecode' }
            ] }
        ]
      }
    ]
  },

  c: {
    parts: [
      {
        key: 'ch1',
        title: 'Chapter 1 — Introduction to C',
        topics: [
          { key: 'history', label: 'History of C', heading: 'History of C',
            body: 'C is one of the oldest languages still in daily use, and understanding why it was built explains why it still matters.',
            steps: [
              { point: 'In 1969-1972, Dennis Ritchie at Bell Labs needed a language to rewrite the Unix operating system, which was originally written in assembly language (very hard to maintain).',
                example: 'Example: before C, engineers had to write Unix using raw instructions specific to one exact processor type.' },
              { point: 'C was designed to be close to hardware (fast, direct memory access) while still being easier to read and write than assembly.',
                example: 'Example: C lets a program directly read a specific memory address, something higher-level languages usually hide from you.' },
              { point: 'Unix, rewritten in C, became hugely influential - and because Unix spread to universities and companies worldwide, C spread with it.',
                example: 'Example: many university Computer Science courses in the 1970s-80s taught C because their labs ran Unix.' },
              { point: 'Almost every major language after C - including C++, Java, Python and JavaScript - borrowed syntax ideas (like curly braces and semicolons) directly from C.',
                example: 'Example: the { } braces and ; semicolons in Java and JavaScript both come directly from C\'s style.' },
              { point: 'Today C is still the language of choice for operating systems, embedded devices (like microwaves and cars), and anywhere raw speed matters most.',
                example: 'Example: the Linux kernel that powers Android phones and most web servers is written mainly in C.' }
            ],
            videos: [
              { label: 'Search: "history of C programming language"', url: 'https://www.youtube.com/results?search_query=history+of+c+programming+language' }
            ] },
          { key: 'structure', label: 'Structure of a C program', heading: 'The structure of every C program',
            body: 'C programs always follow the same basic skeleton - once you recognize it, every new program looks familiar.',
            steps: [
              { point: '#include <stdio.h> - this line brings in a "library" of ready-made tools; stdio.h specifically gives you input/output functions like printf.',
                example: 'Example: removing this line makes printf() undefined, and the program will fail to compile.' },
              { point: 'int main() { ... } - just like Java\'s main method, this is where the program starts running.',
                example: 'Example: a program with no main() function at all will fail to link into a runnable program.' },
              { point: 'Statements inside the curly braces run one after another, top to bottom, unless you use loops or conditions to change that order.',
                example: 'Example: swapping the order of two printf() calls changes the order the text appears on screen.' },
              { point: 'return 0; at the end tells the operating system "the program finished successfully" - this is a C convention you will see everywhere.',
                example: 'Example: a script checking the program\'s exit code afterward sees 0, meaning success.' },
              { point: 'Every statement ends with a semicolon ; - forgetting this is the single most common beginner mistake in C.',
                example: 'Example: writing printf("Hi") without a semicolon causes an "expected \';\'" compiler error.' }
            ],
            videos: [
              { label: 'Search: "structure of C program CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=structure+of+c+program+codewithharry' }
            ] },
          { key: 'features', label: 'Key features', heading: 'Key features of C',
            body: 'C\'s design choices are almost the opposite of a "safe and automatic" language like Java - and that trade-off is exactly its strength.',
            steps: [
              { point: 'Procedural - programs are written as a sequence of steps and functions, not objects (there is no built-in class system in plain C).',
                example: 'Example: a simple calculator program in C is just steps in order: read input, compute, print result - no objects involved.' },
              { point: 'Manual memory management - you allocate and free memory yourself (using functions like malloc and free), giving full control but requiring discipline.',
                example: 'Example: calling malloc(100) reserves 100 bytes, and you must call free() later or that memory stays reserved.' },
              { point: 'Pointers - variables that store memory addresses directly, letting you manipulate data very efficiently (this is C\'s most famous, and trickiest, feature).',
                example: 'Example: int *p = &age; makes p directly store the memory address where age is stored.' },
              { point: 'Very close to machine code - a C compiler produces highly optimized, fast executables, which is why performance-critical software still uses C.',
                example: 'Example: a well-written C sorting routine can run noticeably faster than the same logic written in a higher-level language.' },
              { point: 'Minimal built-in safety nets - the compiler will let you make mistakes that a language like Java would block, so careful testing matters more.',
                example: 'Example: accessing array[10] on a 5-element array won\'t stop the program - it may silently read unrelated memory.' }
            ],
            videos: [
              { label: 'Search: "features of C language explained"', url: 'https://www.youtube.com/results?search_query=features+of+c+language+explained' }
            ] },
          { key: 'first', label: 'First C program', heading: 'Your first C program, line by line',
            body: 'Here is the traditional first C program, broken down piece by piece:',
            steps: [
              { point: '#include <stdio.h> - loads the standard input/output library so printf is available.',
                example: 'Example: this is the same header used for reading input with scanf() too.' },
              { point: 'int main() - the starting point of every C program; "int" means this function will return a whole number when it finishes.',
                example: 'Example: some older code uses void main() instead - it works on a few compilers but isn\'t standard.' },
              { point: 'printf("Hello, Skillverse!\\n") - prints the text to the screen; \\n means "move to a new line afterward".',
                example: 'Example: printf("A"); printf("B\\n"); prints AB followed by a line break.' },
              { point: 'return 0; - signals successful completion back to the operating system.',
                example: 'Example: changing it to return 1; would signal, by convention, that the program exited with an error.' },
              { point: 'Compile and run this using a compiler like gcc - covered in the next topic.',
                example: 'Example: running gcc hello.c -o hello then ./hello compiles and runs it in two steps.' }
            ],
            code: '#include <stdio.h>\n\nint main() {\n  printf("Hello, Skillverse!\\n");\n  return 0;\n}',
            videos: [
              { label: 'Search: "first C program hello world tutorial"', url: 'https://www.youtube.com/results?search_query=first+c+program+hello+world+tutorial' }
            ] },
          { key: 'compile', label: 'Compilation flow', heading: 'What happens when you compile a C program',
            body: 'Unlike Java, C compiles directly to machine code in one straightforward pipeline - no separate "bytecode" step.',
            steps: [
              { point: 'Step 1 - You write your code and save it as hello.c.',
                example: 'Example: saving it as hello.txt by mistake means gcc won\'t recognize it as C source code.' },
              { point: 'Step 2 - Preprocessing - lines starting with # (like #include) are expanded/replaced before real compilation begins.',
                example: 'Example: #include <stdio.h> is literally replaced by the contents of that header file before compiling starts.' },
              { point: 'Step 3 - Compilation - the compiler (e.g. gcc) translates your C code into assembly, then into object code (machine instructions), producing a file like hello.o.',
                example: 'Example: running gcc -c hello.c produces hello.o without yet creating a runnable program.' },
              { point: 'Step 4 - Linking - the linker combines your object code with any library code it depends on (like the printf function) into one final executable file.',
                example: 'Example: the linker connects your call to printf() with its actual implementation inside the C standard library.' },
              { point: 'Step 5 - You run the executable directly (e.g. ./a.out or hello.exe) - at this point it is pure machine code, with no translator needed at runtime, which is why C programs start up and run so fast.',
                example: 'Example: on Windows the final file is hello.exe; on Linux/Mac it\'s just hello, run as ./hello.' }
            ],
            videos: [
              { label: 'Search: "C compilation process gcc explained"', url: 'https://www.youtube.com/results?search_query=c+compilation+process+gcc+explained' }
            ] }
        ]
      }
    ]
  },

  cpp: {
    parts: [
      {
        key: 'ch1',
        title: 'Chapter 1 — Introduction to C++',
        topics: [
          { key: 'history', label: 'History of C++', heading: 'History of C++',
            body: 'C++ exists because one engineer wanted the speed of C plus a better way to organize large programs.',
            steps: [
              { point: 'In 1979, Bjarne Stroustrup started work at Bell Labs (the same lab where C was born) on a project called "C with Classes".',
                example: 'Example: his early goal was letting a "Car" struct in C also have functions attached to it directly.' },
              { point: 'His goal was to add object-oriented programming (classes, objects) to C without losing C\'s raw performance.',
                example: 'Example: a C++ game engine can use classes for organization while still running physics calculations at C-like speed.' },
              { point: 'In 1983 the language was renamed C++ - the name itself is a programming joke: ++ is C\'s "increment" operator, meaning "one step beyond C".',
                example: 'Example: the ++ in C++ is literally the same increment operator used in code like count++;.' },
              { point: 'Over the following decades, C++ added templates, the Standard Template Library (STL), and many modern features, while staying backward-compatible with most C code.',
                example: 'Example: std::vector<int> from the STL replaced a lot of manual array-resizing code C programmers used to write by hand.' },
              { point: 'Today C++ is used for game engines, high-frequency trading systems, and any software where both speed and large-scale organization matter.',
                example: 'Example: engines like Unreal Engine are written largely in C++ for exactly this reason.' }
            ],
            videos: [
              { label: 'Search: "history of C++ explained"', url: 'https://www.youtube.com/results?search_query=history+of+c%2B%2B+explained' }
            ] },
          { key: 'oop', label: 'OOP basics', heading: 'Classes and objects - the core idea C++ added to C',
            body: 'Object-oriented programming is the biggest conceptual jump from C to C++. In simple words: a class is like a recipe, and an object is the actual dish you cook from it.',
            steps: [
              { point: 'A class is a blueprint - for example, a "Car" class might define that every car has a color, a speed, and a "drive" action.',
                example: 'Example: class Car { string color; int speed; };' },
              { point: 'An object is one specific instance built from that blueprint - "my red car" is an object of the Car class.',
                example: 'Example: Car myCar; creates one actual car object from the Car blueprint.' },
              { point: 'This groups related data (color, speed) and behavior (drive) into one unit, instead of scattering related variables and functions separately like in C.',
                example: 'Example: myCar.drive(); calls the drive behavior that belongs specifically to myCar.' },
              { point: 'Classes also support encapsulation - hiding internal details so other parts of the program can only interact through a controlled, intentional interface.',
                example: 'Example: marking speed as private prevents other code from directly writing myCar.speed = -50;.' },
              { point: 'This same "class and object" idea is what Java also uses - which is why C++ knowledge transfers easily into learning Java.',
                example: 'Example: a C++ programmer moving to Java will recognize class and object immediately, just with different syntax.' }
            ],
            videos: [
              { label: 'Search: "OOP classes and objects C++ simple explanation"', url: 'https://www.youtube.com/results?search_query=oop+classes+and+objects+c%2B%2B+simple+explanation' }
            ] },
          { key: 'features', label: 'Key features', heading: 'Key features of C++',
            body: 'C++ is often called a "multi-paradigm" language because it lets you mix different styles depending on what a problem needs.',
            steps: [
              { point: 'Multi-paradigm - you can write plain procedural code (like C) or full object-oriented code (like Java) in the same program.',
                example: 'Example: you can write a quick procedural-style C++ script, or a fully object-oriented one, in the same file.' },
              { point: 'Manual memory control - like C, you can manage memory directly, giving high performance but requiring careful handling.',
                example: 'Example: int* arr = new int[100]; reserves memory that must later be freed with delete[] arr;.' },
              { point: 'The Standard Template Library (STL) - a large collection of ready-made, well-tested data structures (like lists and maps) so you don\'t rebuild them from scratch.',
                example: 'Example: std::sort(numbers.begin(), numbers.end()); sorts an entire list in one line, using the STL.' },
              { point: 'Strong performance - compiled directly to machine code, C++ is a top choice when speed is critical (games, simulations, real-time systems).',
                example: 'Example: physics simulations in a racing game are often written in C++ specifically for this speed.' },
              { point: 'Backward compatibility - most valid C code can be compiled as C++, which made adoption easier for teams already using C.',
                example: 'Example: an old .c file with basic C code can usually be renamed .cpp and compiled as C++ with little to no change.' }
            ],
            videos: [
              { label: 'Search: "features of C++ language tutorial"', url: 'https://www.youtube.com/results?search_query=features+of+c%2B%2B+language+tutorial' }
            ] },
          { key: 'first', label: 'First C++ program', heading: 'Your first C++ program, line by line',
            body: 'Here is the classic first C++ program, explained piece by piece:',
            steps: [
              { point: '#include <iostream> - loads the input/output library, which provides cout for printing text.',
                example: 'Example: without this line, cout is undefined and the program won\'t compile.' },
              { point: 'using namespace std; - lets you write cout instead of the longer std::cout every time.',
                example: 'Example: without it, you\'d have to write std::cout every single time instead of just cout.' },
              { point: 'int main() { ... } - the starting point of the program, same convention as C.',
                example: 'Example: this is identical in spirit to C\'s int main() - the same entry-point convention.' },
              { point: 'cout << "Hello, Skillverse!" << endl; - the << arrow sends text to the output stream (the screen); endl moves to a new line.',
                example: 'Example: cout << "Score: " << 95 << endl; prints Score: 95 followed by a new line.' },
              { point: 'return 0; - tells the operating system the program finished successfully.',
                example: 'Example: leaving this out is technically allowed in C++ (unlike C), but it\'s still good practice to include it.' }
            ],
            code: '#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello, Skillverse!" << endl;\n  return 0;\n}',
            videos: [
              { label: 'Search: "first C++ program hello world"', url: 'https://www.youtube.com/results?search_query=first+c%2B%2B+program+hello+world' }
            ] },
          { key: 'compile', label: 'Compilation flow', heading: 'What happens when you compile a C++ program',
            body: 'The C++ compilation pipeline mirrors C\'s almost exactly, just with a compiler that also understands classes and objects.',
            steps: [
              { point: 'Step 1 - Write your code and save it as hello.cpp.',
                example: 'Example: some projects use .cc or .cxx instead of .cpp - all are valid C++ source extensions.' },
              { point: 'Step 2 - Preprocessing - #include lines are expanded before real compilation starts.',
                example: 'Example: #include <iostream> is expanded into your file\'s text before the compiler even starts checking your code.' },
              { point: 'Step 3 - Compilation - a compiler like g++ translates your code into object code, checking types and class structures along the way.',
                example: 'Example: g++ -c hello.cpp -o hello.o produces the object file, checking your classes and types along the way.' },
              { point: 'Step 4 - Linking - your object code is combined with any needed library code into one executable file.',
                example: 'Example: linking connects your call to cout with the pre-compiled code that actually implements it.' },
              { point: 'Step 5 - You run the final executable directly - like C, there is no runtime translator needed, which keeps C++ programs fast.',
                example: 'Example: ./hello on Linux/Mac, or hello.exe on Windows, runs the final compiled program directly.' }
            ],
            videos: [
              { label: 'Search: "C++ compilation process g++ explained"', url: 'https://www.youtube.com/results?search_query=c%2B%2B+compilation+process+g%2B%2B+explained' }
            ] }
        ]
      }
    ]
  },

  // PYTHON — taken directly from the official T.Y.B.C.A (NEP-2020) syllabus,
  // unit-wise, split into the two parts exactly as the syllabus defines them:
  // Python Programming - I (Semester V) and Python Programming - II (Semester VI).
  python: {
    parts: [
      {
        key: 'python1',
        title: 'Introduction to Python Programming (Semester V)',
        topics: [
          { key: 'unit1', label: 'Introduction', heading: 'Unit I — Introduction to Python Programming',
            body: 'In simple words: this unit is about getting to know Python before writing any real code - what it is, where it came from, and getting it installed on your computer.',
            steps: [
              { point: 'Introduction to Python - Python is a simple, easy-to-learn, and powerful programming language. It was created by Guido van Rossum in 1991. Python has a clear and readable syntax, making it a great choice for beginners as well as experienced programmers. Python is used to build websites, develop software, automate tasks, analyze data, create artificial intelligence (AI) and machine learning applications, and much more.',
                example: 'Example: print("Hi") is a complete, valid Python program - no class or main function needed, unlike Java or C++.' },
              { point: 'History of Python - Python is a high-level programming language created by Guido van Rossum in 1989 and officially released in 1991. He developed Python to make programming simple, easy to read, and easy to learn. The name Python was inspired by the British comedy show "Monty Python\'s Flying Circus", not the snake. Over time, Python became one of the most popular programming languages because of its simple syntax, powerful features, and wide range of applications. Today, Python is widely used in web development, data science, artificial intelligence (AI), machine learning, automation, and software development.',
                example: 'Example: Guido van Rossum began working on Python in December 1989, releasing it publicly in 1991.' },
              { point: 'Versions of Python - Python was first released as Python 0.9.0 in February 1991 by Guido van Rossum. The first stable version, Python 1.0, was released in January 1994, introducing features such as lambda, map, filter, and reduce. Python 2.0, released in October 2000, added important features like list comprehensions and automatic memory management. Although Python 2 was widely used for many years, it reached its end of life on January 1, 2020, and is no longer supported. Python 3.0, released in December 2008, introduced several improvements and removed outdated features to make the language more consistent and efficient. Since then, many versions of Python 3 have been released with new features, performance improvements, and security updates. Today, Python 3 (currently the Python 3.14 series) is the official and recommended version for all new Python applications.',
                example: 'Example: Python 2 code often used print "Hello" without brackets; Python 3 requires print("Hello").' },
              { point: 'Need of Python - Python was developed to make programming simple, readable, and easy to learn. It reduces the complexity of writing programs by using a clear and concise syntax. Python is a versatile programming language that can be used for web development, software development, data analysis, artificial intelligence (AI), machine learning, automation, scientific computing, and many other applications. Its large collection of built-in libraries and strong community support help developers create applications quickly and efficiently. Because of these advantages, Python is widely used by students, professionals, researchers, and organizations around the world.',
                example: 'Example: a task that takes 20 lines in a lower-level language can often be written in just 2-3 lines in Python.' },
              { point: 'Features of Python - Python is a high-level, interpreted, and object-oriented programming language with a simple and readable syntax. It is free and open-source, making it available to everyone. Python is cross-platform, meaning the same program can run on Windows, Linux, and macOS with little or no modification. It has a large standard library that provides ready-to-use modules for various tasks. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It also offers automatic memory management, dynamic typing, and easy integration with other programming languages, making it one of the most popular programming languages today.',
                example: 'Example: the exact same Python script runs unchanged on Windows, Linux and macOS.' },
              { point: 'Applications of Python - Python is one of the most widely used programming languages because of its simplicity, versatility, and powerful libraries. It is used in web development to build websites and web applications using frameworks such as Django and Flask. Python plays a major role in Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning for developing intelligent systems and predictive models. It is widely used in Data Science, Data Analysis, and Data Visualization with libraries like Pandas, NumPy, and Matplotlib. Python is also used for automation and scripting to perform repetitive tasks efficiently. In addition, Python is used in cloud computing, cybersecurity, scientific computing, Internet of Things (IoT), robotics, game development, desktop application development, DevOps, software testing, and API development. It is also popular for Generative AI, Large Language Models (LLMs), chatbot development, computer vision, and natural language processing (NLP). Due to its wide range of applications and continuous improvements, Python remains one of the most popular programming languages in 2026.',
                example: 'Example: Instagram\'s backend and many modern AI chatbot systems are built using Python.' },
              { point: 'Installing Python on Linux and Windows - Python can be downloaded from the official Python website: https://www.python.org/downloads/. To install Python on Windows, first visit the website and download the latest version of Python for Windows. Open the downloaded installer, check the "Add Python to PATH" option, and click "Install Now". After the installation is complete, open Command Prompt and type python --version or py --version to verify that Python has been installed successfully. To install Python on Linux (Ubuntu/Debian), open the Terminal and update the package list by running sudo apt update. Then install Python using sudo apt install python3 and install the Python package manager using sudo apt install python3-pip. After the installation is complete, verify it by typing python3 --version and pip3 --version in the terminal. If the version numbers are displayed, Python has been installed successfully and is ready to use.',
                example: 'Example: after installing, typing python --version in Command Prompt (Windows) or python3 --version (Linux) confirms it worked.' },
              { point: 'Installing a Python IDE - A Python IDE (Integrated Development Environment) is software used to write, edit, run, and debug Python programs. Beginners can use IDLE, which is installed automatically with Python, or install popular IDEs such as Visual Studio Code (VS Code) or PyCharm. To install an IDE, first download it from its official website. Run the installer and follow the installation steps. After installation, open the IDE and ensure that it detects the installed Python interpreter. If Python is not detected automatically, select the Python installation path manually. Once the setup is complete, create a new Python file, write your code, and run it to start programming.',
                example: 'Example: opening VS Code, installing the "Python" extension, then pressing Run on a .py file executes it instantly.' }
            ],
            videos: [
              { label: 'Search: "Python installation Windows CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+installation+windows+codewithharry' },
              { label: 'Search: "history and features of Python explained"', url: 'https://www.youtube.com/results?search_query=history+and+features+of+python+explained' }
            ] },

          { key: 'unit2', label: 'Basics', heading: 'Unit II — Basics of Python Programming',
            body: 'This unit covers the actual building blocks every Python program is made of - in simple words, the "words" and "grammar" of the language.',
            steps: [
              { point: 'Python identifiers, variables and keywords - the rules for naming things in a program, and words Python reserves for itself and won\'t let you use as names.',
                example: 'Example: student_name = "Aarav" is a valid name; class = "X" is invalid because class is a reserved keyword.' },
              { point: 'Putting comments - writing notes in your code (using #) that Python completely ignores when running - just for humans reading the code.',
                example: 'Example: # this calculates the total price is ignored completely when the program runs.' },
              { point: 'Expressions and statements - the difference between a small piece of code that produces a value and a complete instruction.',
                example: 'Example: 5 + 3 is an expression (produces 8); total = 5 + 3 is a complete statement.' },
              { point: 'Standard data types - Basic types, None, Boolean, and Numbers, and how Python represents each one internally.',
                example: 'Example: x = 5 is an int, y = 5.0 is a float, z = True is a bool, w = None means "no value".' },
              { point: 'Type conversion functions - converting a value from one data type to another, e.g. turning text into a number.',
                example: 'Example: int("5") converts the text "5" into the actual number 5.' },
              { point: 'Operators in Python, and operator precedence - the symbols that perform calculations or comparisons, and the order they run in when combined.',
                example: 'Example: 2 + 3 * 4 evaluates to 14, not 20, because * runs before +.' },
              { point: 'Accepting input and displaying output - reading what a user types on the keyboard, and showing results back to them on screen.',
                example: 'Example: name = input("Your name: ") followed by print("Hi", name) greets the user by name.' },
              { point: 'Flow control: conditional statements - making a program choose between different paths using if / elif / else.',
                example: 'Example: if marks >= 40: print("Pass") else: print("Fail").' },
              { point: 'Looping statements, and the break, continue and pass statements - repeating a block of code, and controlling exactly how and when that repetition stops or skips.',
                example: 'Example: for i in range(5): if i == 3: break stops the loop as soon as i reaches 3.' }
            ],
            code: 'age = int(input("Enter your age: "))\n\nif age >= 18:\n    print("You can vote.")\nelse:\n    print("Not yet eligible to vote.")\n\nfor i in range(3):\n    if i == 1:\n        continue  # skip this round\n    print("Round:", i)',
            videos: [
              { label: 'Search: "Python variables and data types CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+variables+and+data+types+codewithharry' },
              { label: 'Search: "Python if else loops Apna College"', url: 'https://www.youtube.com/results?search_query=python+if+else+loops+apna+college' }
            ] },

          { key: 'unit3', label: 'Strings & Lists', heading: 'Unit III — Python Strings',
            body: 'This unit covers two of Python\'s most-used data structures: text (strings) and ordered collections (lists) - in simple words, how Python stores and works with words and groups of items.',
            steps: [
              { point: 'Introduction to strings - string literals, and assigning a string to a variable, including multiline strings (text that spans several lines).',
                example: 'Example: message = """Hello\\nWelcome""" creates a string spanning two lines.' },
              { point: 'Operations on strings - the index operator, used for picking out individual characters of a string by their position.',
                example: 'Example: "Python"[0] gives "P", the first character.' },
              { point: 'String methods, length, and the slice operator - built-in tools for transforming and measuring text, and pulling out just a part of it.',
                example: 'Example: "python".upper() gives "PYTHON"; len("python") gives 6; "python"[1:4] gives "yth".' },
              { point: 'String comparison - how Python decides whether two strings are equal, or which one comes first alphabetically.',
                example: 'Example: "apple" < "banana" evaluates to True, because Python compares strings alphabetically.' },
              { point: 'Concepts of Python lists - creating a list, initializing it with values, and accessing individual elements inside it.',
                example: 'Example: fruits = ["apple", "banana"]; fruits[0] gives "apple".' },
              { point: 'Traversing, updating and deleting elements from lists - looping through a list, changing an item in it, and removing items from it.',
                example: 'Example: fruits[0] = "mango" changes the first item; del fruits[1] removes the second.' },
              { point: 'List operations - concatenation (joining two lists together), indexing, and slicing (grabbing a portion of a list).',
                example: 'Example: [1,2] + [3,4] gives [1,2,3,4]; [1,2,3][0:2] gives [1,2].' },
              { point: 'Built-in list functions and methods, plus aliasing and cloning lists - the difference between two variables pointing to the same list versus having independent copies.',
                example: 'Example: b = a makes b point to the SAME list as a; b = a.copy() makes an independent copy instead.' }
            ],
            code: 'name = "Skillverse"\nprint(name[0])         # first character\nprint(name[-1])        # last character\nprint(name[0:5])       # slice: first 5 characters\nprint(name.upper())    # built-in string method\n\nlanguages = ["Java", "C", "C++"]\nlanguages.append("Python")\nprint(languages)',
            videos: [
              { label: 'Search: "Python strings tutorial Telusko"', url: 'https://www.youtube.com/results?search_query=python+strings+tutorial+telusko' },
              { label: 'Search: "Python lists explained CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+lists+explained+codewithharry' }
            ] },

          { key: 'unit4', label: 'Tuples & Functions', heading: 'Unit IV — Python Tuples, Dictionary and Functions',
            body: 'This unit covers Python\'s fixed (unchangeable) collection type, and how to organize code into reusable functions - in simple words, "locked" lists, and named recipes you can reuse.',
            steps: [
              { point: 'Introduction to tuples - creating a tuple, and how it differs from a list (a tuple cannot be changed once it is created).',
                example: 'Example: coordinates = (10, 20) creates a tuple that cannot be changed afterward.' },
              { point: 'Deleting tuples, and accessing elements in a tuple - reading values out of a tuple, and removing a tuple entirely.',
                example: 'Example: coordinates[0] gives 10; del coordinates removes the whole tuple at once.' },
              { point: 'Tuple operations - concatenation, repetition, membership (checking if a value exists inside it), and iteration (looping through it).',
                example: 'Example: (1,2) + (3,4) gives (1,2,3,4); 5 in (1,5,9) gives True.' },
              { point: 'Built-in tuple functions and methods - the ready-made tools Python provides for working with tuples.',
                example: 'Example: len((1,2,3)) gives 3; max((4,9,2)) gives 9.' },
              { point: 'Introduction to functions - defining a function using def, and calling (running) it elsewhere in your program.',
                example: 'Example: def greet(): print("Hi") followed by greet() prints Hi.' },
              { point: 'Function arguments - required arguments, keyword arguments, default arguments, and variable-length arguments.',
                example: 'Example: def greet(name="Student"): print("Hi", name) - calling greet() alone prints "Hi Student" using the default.' },
              { point: 'Scope of variables - understanding which parts of a program are allowed to "see" and use a given variable.',
                example: 'Example: a variable created inside a function disappears once the function finishes running - it can\'t be used outside it.' },
              { point: 'Void functions versus functions that return values - the difference between a function that just performs an action and one that hands back a result.',
                example: 'Example: def add(a,b): return a+b gives back a usable value; def show(): print("Hi") just performs an action.' },
              { point: 'Recursion - in simple words, a function that calls itself to solve a smaller version of the same problem, until it reaches a simple base case.',
                example: 'Example: factorial(5) calls factorial(4), which calls factorial(3), and so on down to factorial(0).' },
              { point: 'Advanced function topics - anonymous functions (lambda), and mapping a function across an entire collection of items at once.',
                example: 'Example: list(map(lambda x: x*2, [1,2,3])) gives [2,4,6].' }
            ],
            code: 'def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)  # recursion\n\nprint(factorial(5))\n\nsquare = lambda x: x * x   # anonymous function\nprint(square(6))',
            videos: [
              { label: 'Search: "Python tuples vs lists explained"', url: 'https://www.youtube.com/results?search_query=python+tuples+vs+lists+explained' },
              { label: 'Search: "Python functions and lambda CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+functions+and+lambda+codewithharry' }
            ] }
        ]
      },

      {
        key: 'python2',
        title: 'Python Programming — II (Semester VI)',
        topics: [
          { key: 'unit1', label: 'OOP Concepts', heading: 'Unit I — Object Oriented Concepts in Python',
            body: 'In simple words: this unit teaches how to group related data and actions together into one reusable "object" - the same idea from C++/Java, now in Python.',
            steps: [
              { point: 'Overview of OOP terminology - getting familiar with words like class, object, attribute and method before using them in code.',
                example: 'Example: in class Car: speed = 0, "Car" is the class, "speed" is an attribute.' },
              { point: 'Creating classes - defining a blueprint for an object using the class keyword.',
                example: 'Example: class Student: def __init__(self, name): self.name = name' },
              { point: 'Creating instance objects, and accessing attributes - making an actual object from a class, and reading the values stored inside it.',
                example: 'Example: s1 = Student("Aarav"); print(s1.name) prints Aarav.' },
              { point: 'Built-in class attributes, and garbage collection/constructors - special values Python gives every class automatically, and how __init__ sets up a brand-new object.',
                example: 'Example: __init__ runs automatically the moment Student("Aarav") is called.' },
              { point: 'Overloading methods and operators - letting ordinary operators like + behave in a custom way for your own objects.',
                example: 'Example: defining __add__ inside a class lets you write obj1 + obj2 for your own custom objects.' },
              { point: 'Inheritance - implementing a subclass and overriding methods - building a new class that reuses an existing one, then customizing specific parts of it.',
                example: 'Example: class Dog(Animal): def speak(self): print("Bark") replaces Animal\'s speak() just for Dog objects.' }
            ],
            code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        print(self.name, "makes a sound")\n\nclass Dog(Animal):          # inheritance\n    def speak(self):        # overriding the method\n        print(self.name, "barks")\n\nd = Dog("Tommy")\nd.speak()',
            videos: [
              { label: 'Search: "Python OOP classes and objects CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+oop+classes+and+objects+codewithharry' },
              { label: 'Search: "Python inheritance explained simple"', url: 'https://www.youtube.com/results?search_query=python+inheritance+explained+simple' }
            ] },

          { key: 'unit2', label: 'Exceptions & Regex', heading: 'Unit II — Python Exception Handling and Regular Expressions',
            body: 'In simple words: exception handling is how a program catches its own mistakes gracefully instead of crashing; a regular expression is a mini search-pattern for finding specific text.',
            steps: [
              { point: 'Introduction, and the difference between a syntax error and an exception - a syntax error means the code itself is written wrong; an exception happens while otherwise-correct code is running.',
                example: 'Example: print("hi" (a missing bracket) is a syntax error; 10/0 is an exception that happens while running.' },
              { point: 'Handling exceptions with try and except - wrapping risky code so that if something goes wrong, your program handles it instead of stopping completely.',
                example: 'Example: try: 10/0 except ZeroDivisionError: print("Can\'t divide by zero") prevents a crash.' },
              { point: 'Multiple except clauses - reacting differently depending on which specific type of error occurred.',
                example: 'Example: one except ValueError: block and a separate except ZeroDivisionError: block handle each error differently.' },
              { point: 'try...finally - a block of code that always runs at the end, whether or not an error happened.',
                example: 'Example: finally: print("Done") runs whether or not the try block succeeded.' },
              { point: 'Raising exceptions, and creating user-defined exceptions - deliberately signaling an error yourself, including designing your own custom error types.',
                example: 'Example: raise ValueError("Age cannot be negative") stops the program with a custom message.' },
              { point: 'A quick look at the list of standard exceptions - the common built-in error types you will run into most often.',
                example: 'Example: IndexError, KeyError and TypeError are all common built-in exception types.' },
              { point: 'Regular expressions - a compact way of describing a text pattern (like "an email address") so Python can search for or validate it.',
                example: 'Example: re.match(r"^[0-9]+$", "12345") confirms a string contains only digits.' }
            ],
            code: 'try:\n    num = int(input("Enter a number: "))\n    print(10 / num)\nexcept ZeroDivisionError:\n    print("You cannot divide by zero!")\nexcept ValueError:\n    print("That was not a valid number.")\nfinally:\n    print("Done checking.")\n\nimport re\nemail = "student@skillverse.com"\nif re.match(r"^[\\w\\.]+@[\\w]+\\.[a-z]+$", email):\n    print("Looks like a valid email")',
            videos: [
              { label: 'Search: "Python try except exception handling CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+try+except+exception+handling+codewithharry' },
              { label: 'Search: "Python regular expressions regex tutorial"', url: 'https://www.youtube.com/results?search_query=python+regular+expressions+regex+tutorial' }
            ] },

          { key: 'unit3', label: 'File Handling', heading: 'Unit III — File Handling in Python',
            body: 'In simple words: this unit is about saving data to a file on disk, and reading it back later, plus managing files and folders from inside your code.',
            steps: [
              { point: 'File objects - understanding the special object Python gives you once a file is opened, which you then use to read or write.',
                example: 'Example: f = open("notes.txt", "r") gives you a file object to read from.' },
              { point: 'Writing text files, and appending text to a file - saving brand-new data, or adding more onto data that already exists in a file.',
                example: 'Example: open("notes.txt","w") overwrites the file; open("notes.txt","a") adds to the end instead.' },
              { point: 'Reading text files - pulling previously saved data back out so your program can use it.',
                example: 'Example: f.read() returns the entire file\'s contents as one string.' },
              { point: 'File exceptions - handling errors like trying to open a file that doesn\'t exist.',
                example: 'Example: opening a missing file raises a FileNotFoundError.' },
              { point: 'Paths and directories, and related exceptions in the os module - working with folder locations on your computer\'s disk.',
                example: 'Example: os.path.exists("notes.txt") checks if a file exists before trying to open it.' },
              { point: 'Directory contents, and obtaining information about files - listing what\'s inside a folder, and checking details like a file\'s size.',
                example: 'Example: os.listdir(".") lists every file in the current folder.' },
              { point: 'Renaming, moving, copying and removing files - basic file management tasks done directly from Python code.',
                example: 'Example: os.rename("old.txt", "new.txt") renames a file directly from Python.' },
              { point: 'Creating and removing directories, and globbing - making or deleting folders, and searching for files that match a pattern.',
                example: 'Example: glob.glob("*.txt") finds every .txt file in the current folder.' }
            ],
            code: '# writing to a file\nwith open("notes.txt", "w") as f:\n    f.write("Skillverse student notes\\n")\n\n# appending more text\nwith open("notes.txt", "a") as f:\n    f.write("Second line added later.\\n")\n\n# reading it back\nwith open("notes.txt", "r") as f:\n    print(f.read())',
            videos: [
              { label: 'Search: "Python file handling read write CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+file+handling+read+write+codewithharry' }
            ] },

          { key: 'unit4a', label: 'GUI (Tkinter)', heading: 'Unit IV — Building a GUI with Tkinter',
            body: 'In simple words: so far every program has run in a plain text terminal - this unit is about giving a program actual clickable windows, buttons and boxes.',
            steps: [
              { point: 'GUI programming toolkits for Python, and an introduction to Tkinter - Python\'s own built-in library for building windows and on-screen controls.',
                example: 'Example: import tkinter as tk is the first line of almost every Tkinter program.' },
              { point: 'Creating GUI widgets with Tkinter - adding elements like buttons, labels and text boxes onto a window.',
                example: 'Example: tk.Label(window, text="Hello").pack() adds a text label to the window.' },
              { point: 'Resizing the widget, and creating layouts - controlling how big each element is and where it sits on screen.',
                example: 'Example: window.geometry("300x200") sets the window to 300x200 pixels.' },
              { point: 'Packing order, and controlling widget appearances - the rules for how widgets stack and arrange themselves inside a window.',
                example: 'Example: calling .pack() on widgets in a specific order controls whether they stack top-to-bottom or side-by-side.' },
              { point: 'Radio buttons and checkboxes, and dialog boxes - common interactive controls, like the ones you click in any everyday desktop app.',
                example: 'Example: tk.Checkbutton(window, text="Agree").pack() adds a clickable checkbox.' }
            ],
            code: 'import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("Skillverse")\n\nlabel = tk.Label(window, text="Welcome to Python GUI!")\nlabel.pack()\n\nbutton = tk.Button(window, text="Click me", command=lambda: print("Button clicked!"))\nbutton.pack()\n\nwindow.mainloop()',
            videos: [
              { label: 'Search: "Python Tkinter GUI tutorial for beginners"', url: 'https://www.youtube.com/results?search_query=python+tkinter+gui+tutorial+for+beginners' }
            ] },

          { key: 'unit4b', label: 'Python + MySQL', heading: 'Unit IV — Python with MySQL',
            body: 'In simple words: this unit connects Python to a real database, so your program\'s data is saved permanently instead of disappearing when the program closes.',
            steps: [
              { point: 'Introduction to MySQL, and installing a MySQL driver (MySQL Connector or MySQLdb) - the extra tool Python needs to be able to talk to a MySQL database.',
                example: 'Example: pip install mysql-connector-python installs the driver Python needs to talk to MySQL.' },
              { point: 'MySQL database connection with Python - the code that actually links your program to the database server.',
                example: 'Example: mysql.connector.connect(host="localhost", user="root", password="") opens a connection.' },
              { point: 'Creating a database in MySQL using Python, and creating a table - setting up storage structure directly from within your code.',
                example: 'Example: cursor.execute("CREATE TABLE students (name VARCHAR(50))") creates a new table.' },
              { point: 'Insert, Select, Update and Delete operations - the four basic actions you can perform on data stored in a database table.',
                example: 'Example: cursor.execute("INSERT INTO students VALUES (%s)", ("Aarav",)) adds one row.' },
              { point: 'COMMIT and ROLLBACK operations - COMMIT saves your changes permanently; ROLLBACK undoes them if something went wrong before saving.',
                example: 'Example: db.commit() saves the insert permanently; db.rollback() would undo it if something went wrong first.' },
              { point: 'Disconnecting the database - properly closing the connection once your program is done using it.',
                example: 'Example: db.close() releases the connection once your program is finished with the database.' }
            ],
            code: 'import mysql.connector\n\ndb = mysql.connector.connect(\n    host="localhost", user="root", password="", database="skillverse_db"\n)\ncursor = db.cursor()\n\ncursor.execute("INSERT INTO students (name) VALUES (%s)", ("Aarav",))\ndb.commit()   # save the change permanently\n\ncursor.execute("SELECT * FROM students")\nfor row in cursor.fetchall():\n    print(row)\n\ndb.close()',
            videos: [
              { label: 'Search: "Python MySQL connection tutorial CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+mysql+connection+tutorial+codewithharry' }
            ] }
        ]
      }
    ]
  }
};
