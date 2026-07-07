export const initialTracks = [
  { key: 'java', name: 'Java', pillClass: 'pill-java', fee: 1499, chapters: 6, hasContent: true },
  { key: 'c', name: 'C', pillClass: 'pill-c', fee: 999, chapters: 4, hasContent: true },
  { key: 'cpp', name: 'C++', pillClass: 'pill-cpp', fee: 1299, chapters: 6, hasContent: true },
  { key: 'python', name: 'Python', pillClass: 'pill-python', fee: 1799, chapters: 5, hasContent: true }
];

// EDIT SYLLABUS HERE.
// Each track has a "topics" array of 5 items (mapped onto the 5 fixed mind-map positions).
// Each topic can have:
//   heading  - title in the theory panel
//   body     - a short intro paragraph
//   steps    - an array of strings, shown as a numbered step-by-step breakdown
//   code     - an optional code sample shown in a code box
// "recommendedVideos" is a list of real, trustworthy YouTube channels/searches
// for that language - shown as a "Recommended videos" panel for students.
// These are safe permanent links (channel pages / search pages), so they won't break
// even if a specific video is ever removed.

export const syllabus = {
  java: {
    chapterTitle: 'Chapter 1 — Introduction to Java',
    videoUrl: '',
    recommendedVideos: [
      { label: 'CodeWithHarry — Java Tutorial in Hindi (channel)', url: 'https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww' },
      { label: 'Apna College — Java + DSA (channel)', url: 'https://www.youtube.com/channel/UCBwmMxybNva6P_5VmxjzwqA' },
      { label: 'Search: "Java full course Telusko"', url: 'https://www.youtube.com/results?search_query=java+full+course+telusko' }
    ],
    topics: [
      { key: 'history', label: 'History of Java', heading: 'History of Java',
        body: 'Java did not appear overnight - it grew out of a real engineering problem at Sun Microsystems in the early 1990s.',
        steps: [
          'In 1991, a team at Sun Microsystems led by James Gosling was building software for smart consumer electronics (like set-top boxes).',
          'They needed one program to run on many different chips without being rewritten each time - existing languages like C++ could not do this easily.',
          'The team built a new language, first called "Oak", designed around one core idea: compile once, run anywhere.',
          'In 1995, it was renamed Java and released publicly, and it quickly became popular for building web applets and enterprise software.',
          'Today Java runs on billions of devices - from Android phones to banking servers - because that original "run anywhere" design still works.'
        ] },
      { key: 'jvm', label: 'JVM · JRE · JDK', heading: 'JVM · JRE · JDK - the three letters that confuse every beginner',
        body: 'These three terms build on top of each other like layers - once you see the order, they stop being confusing.',
        steps: [
          'JDK (Java Development Kit) - this is what you install to WRITE Java code. It includes a compiler (javac) and everything a developer needs.',
          'JRE (Java Runtime Environment) - this is what you need to RUN a Java program (but not write one). It sits inside the JDK.',
          'JVM (Java Virtual Machine) - this is the actual engine, inside the JRE, that reads compiled code and executes it line by line.',
          'Order to remember: JDK contains JRE, and JRE contains JVM - like a box inside a box inside a box.',
          'This is exactly why Java is portable: the JVM is different for each operating system, but it always understands the same compiled bytecode.'
        ] },
      { key: 'features', label: 'Key features', heading: 'Key features of Java',
        body: 'Java became popular because of a specific set of design choices, not by accident.',
        steps: [
          'Platform-independent - code compiled once (into .class bytecode) runs on Windows, macOS or Linux without changes.',
          'Object-oriented - everything is organized around "objects" that bundle data and behavior together, which keeps large programs manageable.',
          'Automatic memory management - a background process called the "garbage collector" frees memory you are no longer using, so you rarely have to do it by hand.',
          'Strongly typed - the compiler catches many mistakes (like mixing text and numbers incorrectly) before the program even runs.',
          'Huge ecosystem - millions of existing libraries and frameworks (like Spring) mean you rarely build everything from scratch.'
        ] },
      { key: 'first', label: 'First Java program', heading: 'Your first Java program, line by line',
        body: 'Every Java program, no matter how big, starts execution from one specific method called main. Here is the smallest complete program, explained piece by piece:',
        steps: [
          'public class Hello - defines a "class" named Hello. In Java, all code must live inside a class.',
          'public static void main(String[] args) - this exact line is the entry point; the JVM looks for this method first and starts running from here.',
          'System.out.println("...") - this is how you print text to the screen; "println" means "print line".',
          'The semicolon ; at the end of the line tells Java "this instruction is complete".',
          'The curly braces { } mark where a block of code starts and ends - one pair for the class, one pair for the method.'
        ],
        code: 'public class Hello {\n  public static void main(String[] args) {\n    System.out.println("Hello, Skillverse!");\n  }\n}' },
      { key: 'compile', label: 'Compilation flow', heading: 'What actually happens when you run a Java program',
        body: 'Java uses a two-step process that is different from purely compiled or purely interpreted languages - this is the real secret behind "write once, run anywhere".',
        steps: [
          'Step 1 - You write code and save it as Hello.java (the source code, in plain text).',
          'Step 2 - You run the compiler: javac Hello.java. This checks your code for errors and converts it into Hello.class (bytecode) - not directly into machine code.',
          'Step 3 - Bytecode is a universal format that no specific computer understands directly - it is a middle language made for the JVM.',
          'Step 4 - You run the program: java Hello. The JVM on your machine reads the bytecode and translates it into instructions your specific computer/OS understands, on the fly.',
          'Step 5 - Because every operating system has its own JVM, but bytecode looks the same everywhere, the same .class file runs unchanged on Windows, Mac or Linux.'
        ] }
    ]
  },

  c: {
    chapterTitle: 'Chapter 1 — Introduction to C',
    videoUrl: '',
    recommendedVideos: [
      { label: 'CodeWithHarry — C Language (channel)', url: 'https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww' },
      { label: 'Apna College — C Language Full Course (channel)', url: 'https://www.youtube.com/channel/UCBwmMxybNva6P_5VmxjzwqA' },
      { label: 'Search: "C programming full course Neso Academy"', url: 'https://www.youtube.com/results?search_query=c+programming+full+course+neso+academy' }
    ],
    topics: [
      { key: 'history', label: 'History of C', heading: 'History of C',
        body: 'C is one of the oldest languages still in daily use, and understanding why it was built explains why it still matters.',
        steps: [
          'In 1969-1972, Dennis Ritchie at Bell Labs needed a language to rewrite the Unix operating system, which was originally written in assembly language (very hard to maintain).',
          'C was designed to be close to hardware (fast, direct memory access) while still being easier to read and write than assembly.',
          'Unix, rewritten in C, became hugely influential - and because Unix spread to universities and companies worldwide, C spread with it.',
          'Almost every major language after C - including C++, Java, Python and JavaScript - borrowed syntax ideas (like curly braces and semicolons) directly from C.',
          'Today C is still the language of choice for operating systems, embedded devices (like microwaves and cars), and anywhere raw speed matters most.'
        ] },
      { key: 'structure', label: 'Structure of a C program', heading: 'The structure of every C program',
        body: 'C programs always follow the same basic skeleton - once you recognize it, every new program looks familiar.',
        steps: [
          '#include <stdio.h> - this line brings in a "library" of ready-made tools; stdio.h specifically gives you input/output functions like printf.',
          'int main() { ... } - just like Java\'s main method, this is where the program starts running.',
          'Statements inside the curly braces run one after another, top to bottom, unless you use loops or conditions to change that order.',
          'return 0; at the end tells the operating system "the program finished successfully" - this is a C convention you will see everywhere.',
          'Every statement ends with a semicolon ; - forgetting this is the single most common beginner mistake in C.'
        ] },
      { key: 'features', label: 'Key features', heading: 'Key features of C',
        body: 'C\'s design choices are almost the opposite of a "safe and automatic" language like Java - and that trade-off is exactly its strength.',
        steps: [
          'Procedural - programs are written as a sequence of steps and functions, not objects (there is no built-in class system in plain C).',
          'Manual memory management - you allocate and free memory yourself (using functions like malloc and free), giving full control but requiring discipline.',
          'Pointers - variables that store memory addresses directly, letting you manipulate data very efficiently (this is C\'s most famous, and trickiest, feature).',
          'Very close to machine code - a C compiler produces highly optimized, fast executables, which is why performance-critical software still uses C.',
          'Minimal built-in safety nets - the compiler will let you make mistakes that a language like Java would block, so careful testing matters more.'
        ] },
      { key: 'first', label: 'First C program', heading: 'Your first C program, line by line',
        body: 'Here is the traditional first C program, broken down piece by piece:',
        steps: [
          '#include <stdio.h> - loads the standard input/output library so printf is available.',
          'int main() - the starting point of every C program; "int" means this function will return a whole number when it finishes.',
          'printf("Hello, Skillverse!\\n") - prints the text to the screen; \\n means "move to a new line afterward".',
          'return 0; - signals successful completion back to the operating system.',
          'Compile and run this using a compiler like gcc - covered in the next topic.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n  printf("Hello, Skillverse!\\n");\n  return 0;\n}' },
      { key: 'compile', label: 'Compilation flow', heading: 'What happens when you compile a C program',
        body: 'Unlike Java, C compiles directly to machine code in one straightforward pipeline - no separate "bytecode" step.',
        steps: [
          'Step 1 - You write your code and save it as hello.c.',
          'Step 2 - Preprocessing - lines starting with # (like #include) are expanded/replaced before real compilation begins.',
          'Step 3 - Compilation - the compiler (e.g. gcc) translates your C code into assembly, then into object code (machine instructions), producing a file like hello.o.',
          'Step 4 - Linking - the linker combines your object code with any library code it depends on (like the printf function) into one final executable file.',
          'Step 5 - You run the executable directly (e.g. ./a.out or hello.exe) - at this point it is pure machine code, with no translator needed at runtime, which is why C programs start up and run so fast.'
        ] }
    ]
  },

  cpp: {
    chapterTitle: 'Chapter 1 — Introduction to C++',
    videoUrl: '',
    recommendedVideos: [
      { label: 'Apna College — C++ Full Course (channel)', url: 'https://www.youtube.com/channel/UCBwmMxybNva6P_5VmxjzwqA' },
      { label: 'CodeWithHarry — C++ Tutorial (channel)', url: 'https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww' },
      { label: 'Search: "C++ full course freeCodeCamp"', url: 'https://www.youtube.com/results?search_query=c%2B%2B+full+course+freecodecamp' }
    ],
    topics: [
      { key: 'history', label: 'History of C++', heading: 'History of C++',
        body: 'C++ exists because one engineer wanted the speed of C plus a better way to organize large programs.',
        steps: [
          'In 1979, Bjarne Stroustrup started work at Bell Labs (the same lab where C was born) on a project called "C with Classes".',
          'His goal was to add object-oriented programming (classes, objects) to C without losing C\'s raw performance.',
          'In 1983 the language was renamed C++ - the name itself is a programming joke: ++ is C\'s "increment" operator, meaning "one step beyond C".',
          'Over the following decades, C++ added templates, the Standard Template Library (STL), and many modern features, while staying backward-compatible with most C code.',
          'Today C++ is used for game engines, high-frequency trading systems, and any software where both speed and large-scale organization matter.'
        ] },
      { key: 'oop', label: 'OOP basics', heading: 'Classes and objects - the core idea C++ added to C',
        body: 'Object-oriented programming is the biggest conceptual jump from C to C++ - it changes how you organize an entire program.',
        steps: [
          'A class is a blueprint - for example, a "Car" class might define that every car has a color, a speed, and a "drive" action.',
          'An object is one specific instance built from that blueprint - "my red car" is an object of the Car class.',
          'This groups related data (color, speed) and behavior (drive) into one unit, instead of scattering related variables and functions separately like in C.',
          'Classes also support encapsulation - hiding internal details so other parts of the program can only interact through a controlled, intentional interface.',
          'This same "class and object" idea is what Java also uses - which is why C++ knowledge transfers easily into learning Java.'
        ] },
      { key: 'features', label: 'Key features', heading: 'Key features of C++',
        body: 'C++ is often called a "multi-paradigm" language because it lets you mix different styles depending on what a problem needs.',
        steps: [
          'Multi-paradigm - you can write plain procedural code (like C) or full object-oriented code (like Java) in the same program.',
          'Manual memory control - like C, you can manage memory directly, giving high performance but requiring careful handling.',
          'The Standard Template Library (STL) - a large collection of ready-made, well-tested data structures (like lists and maps) so you don\'t rebuild them from scratch.',
          'Strong performance - compiled directly to machine code, C++ is a top choice when speed is critical (games, simulations, real-time systems).',
          'Backward compatibility - most valid C code can be compiled as C++, which made adoption easier for teams already using C.'
        ] },
      { key: 'first', label: 'First C++ program', heading: 'Your first C++ program, line by line',
        body: 'Here is the classic first C++ program, explained piece by piece:',
        steps: [
          '#include <iostream> - loads the input/output library, which provides cout for printing text.',
          'using namespace std; - lets you write cout instead of the longer std::cout every time.',
          'int main() { ... } - the starting point of the program, same convention as C.',
          'cout << "Hello, Skillverse!" << endl; - the << arrow sends text to the output stream (the screen); endl moves to a new line.',
          'return 0; - tells the operating system the program finished successfully.'
        ],
        code: '#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello, Skillverse!" << endl;\n  return 0;\n}' },
      { key: 'compile', label: 'Compilation flow', heading: 'What happens when you compile a C++ program',
        body: 'The C++ compilation pipeline mirrors C\'s almost exactly, just with a compiler that also understands classes and objects.',
        steps: [
          'Step 1 - Write your code and save it as hello.cpp.',
          'Step 2 - Preprocessing - #include lines are expanded before real compilation starts.',
          'Step 3 - Compilation - a compiler like g++ translates your code into object code, checking types and class structures along the way.',
          'Step 4 - Linking - your object code is combined with any needed library code into one executable file.',
          'Step 5 - You run the final executable directly - like C, there is no runtime translator needed, which keeps C++ programs fast.'
        ] }
    ]
  },

  python: {
    chapterTitle: 'Chapter 1 — Introduction to Python',
    videoUrl: '',
    recommendedVideos: [
      { label: 'CodeWithHarry — Python Tutorial in Hindi (channel)', url: 'https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww' },
      { label: 'Telusko — Python Full Course (channel)', url: 'https://www.youtube.com/telusko' },
      { label: 'Search: "Python full course freeCodeCamp"', url: 'https://www.youtube.com/results?search_query=python+full+course+freecodecamp' }
    ],
    topics: [
      { key: 'history', label: 'History of Python', heading: 'History of Python',
        body: 'Python\'s entire design philosophy traces back to one goal its creator had: make code as readable as plain English.',
        steps: [
          'Guido van Rossum began working on Python in December 1989, as a hobby project during his Christmas break.',
          'He named it after the British comedy show "Monty Python\'s Flying Circus" - not the snake - because he wanted the language to feel a little fun.',
          'Python 1.0 was released in 1991, with a strong emphasis on clean, readable syntax and fewer symbols cluttering the code.',
          'Over time, Python grew massive libraries for nearly everything - web development, automation, data science, and artificial intelligence.',
          'Today Python is one of the most widely used languages precisely because beginners can read and write it quickly, while experts use it to build serious, large-scale systems.'
        ] },
      { key: 'interpreted', label: 'Interpreted language', heading: 'Python is interpreted, not compiled',
        body: 'This is the single biggest structural difference between Python and languages like Java, C or C++.',
        steps: [
          'In C, C++ and Java, your code is translated (compiled) into another form before it runs - there is a separate "build" step.',
          'In Python, an interpreter reads your .py file directly, translating and executing it line by line as it goes, with no separate compiled file to manage.',
          'This makes testing and experimenting much faster - you can change one line and immediately run it again, with no compile wait.',
          'The trade-off is speed - because translation happens while the program runs, Python programs are generally slower than compiled C/C++/Java programs.',
          'This is why Python is popular for scripting, prototyping and data analysis, while C/C++ remain popular where raw execution speed matters most.'
        ] },
      { key: 'features', label: 'Key features', heading: 'Key features of Python',
        body: 'Python\'s popularity comes from a specific set of choices that prioritize speed of writing code over speed of running it.',
        steps: [
          'Dynamic typing - you don\'t have to declare a variable\'s type in advance; Python figures it out automatically when the program runs.',
          'Readable syntax - Python uses indentation (spacing) instead of curly braces to define blocks of code, forcing clean formatting by design.',
          'Massive standard library and ecosystem - libraries like NumPy, Pandas, Django and TensorFlow mean most common tasks already have a ready-made tool.',
          'Widely used across fields - the same language is used for web backends, automation scripts, data science and machine learning.',
          'Large, active community - because so many people use Python, answers to almost any problem are easy to find online.'
        ] },
      { key: 'first', label: 'First Python program', heading: 'Your first Python program, line by line',
        body: 'Python needs far less code than Java, C or C++ to do the same simple task - here is the entire program:',
        steps: [
          'print("Hello, Skillverse!") - this single line both is the program and runs it; there is no class, no main function, and no semicolon required.',
          'print() is a built-in function that displays whatever is inside its parentheses on the screen.',
          'Text in Python is written between quotes (either "double" or \'single\' quotes both work).',
          'Save this line in a file named hello.py to try it yourself.',
          'Unlike Java/C/C++, there is no separate compile step before this - see the next topic for exactly how it runs.'
        ],
        code: 'print("Hello, Skillverse!")' },
      { key: 'execution', label: 'Execution flow', heading: 'What happens when you run a Python program',
        body: 'Python\'s execution flow is the simplest of all four languages in this course - which is part of why it is often recommended as a first language.',
        steps: [
          'Step 1 - You write your code and save it as hello.py.',
          'Step 2 - You run it directly with a command like: python hello.py - no separate compile step beforehand.',
          'Step 3 - The Python interpreter reads your file from top to bottom, converting each line into low-level instructions and running it immediately.',
          'Step 4 - If there is an error, Python stops exactly at that line and shows you the problem right away, rather than requiring a separate build/compile cycle to catch it.',
          'Step 5 - Because the same interpreter exists for Windows, macOS and Linux, the same .py file runs unchanged across all of them, similar in spirit to Java\'s "write once, run anywhere" - just achieved differently.'
        ] }
    ]
  }
};