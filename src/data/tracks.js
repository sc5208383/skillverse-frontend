export const initialTracks = [
  { key: 'java', name: 'Java', pillClass: 'pill-java', fee: 1499, chapters: 6, hasContent: true },
  { key: 'c', name: 'C', pillClass: 'pill-c', fee: 999, chapters: 4, hasContent: true },
  { key: 'cpp', name: 'C++', pillClass: 'pill-cpp', fee: 1299, chapters: 6, hasContent: true },
  { key: 'python', name: 'Python', pillClass: 'pill-python', fee: 1799, chapters: 5, hasContent: true }
];

// EDIT SYLLABUS HERE.
// Every track has a "parts" array (e.g. one part per chapter, or per semester).
// Each part has: key, title, and a "topics" array (max 5 topics per part - they map onto
// the 5 fixed mind-map node positions).
// Each topic can have:
//   heading  - title in the theory panel
//   body     - a short, plain-language intro paragraph
//   steps    - an array of strings, shown as a numbered step-by-step breakdown
//   code     - an optional code sample shown in a code box
//   videos   - an array of { label, url } - shown as "Recommended videos" right under
//              that specific topic (topic-wise, not just once per whole chapter).
//              These are YouTube search-result links (always valid, never a broken link)
//              pointing at trusted channels (CodeWithHarry, Apna College, Telusko, etc).

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
              'In 1991, a team at Sun Microsystems led by James Gosling was building software for smart consumer electronics (like set-top boxes).',
              'They needed one program to run on many different chips without being rewritten each time - existing languages like C++ could not do this easily.',
              'The team built a new language, first called "Oak", designed around one core idea: compile once, run anywhere.',
              'In 1995, it was renamed Java and released publicly, and it quickly became popular for building web applets and enterprise software.',
              'Today Java runs on billions of devices - from Android phones to banking servers - because that original "run anywhere" design still works.'
            ],
            videos: [
              { label: 'Search: "history of Java explained simple"', url: 'https://www.youtube.com/results?search_query=history+of+java+explained+simple' }
            ] },
          { key: 'jvm', label: 'JVM · JRE · JDK', heading: 'JVM · JRE · JDK - the three letters that confuse every beginner',
            body: 'These three terms build on top of each other like layers - once you see the order, they stop being confusing.',
            steps: [
              'JDK (Java Development Kit) - this is what you install to WRITE Java code. It includes a compiler (javac) and everything a developer needs.',
              'JRE (Java Runtime Environment) - this is what you need to RUN a Java program (but not write one). It sits inside the JDK.',
              'JVM (Java Virtual Machine) - this is the actual engine, inside the JRE, that reads compiled code and executes it line by line.',
              'Order to remember: JDK contains JRE, and JRE contains JVM - like a box inside a box inside a box.',
              'This is exactly why Java is portable: the JVM is different for each operating system, but it always understands the same compiled bytecode.'
            ],
            videos: [
              { label: 'Search: "JVM JRE JDK difference CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=jvm+jre+jdk+difference+codewithharry' }
            ] },
          { key: 'features', label: 'Key features', heading: 'Key features of Java',
            body: 'Java became popular because of a specific set of design choices, not by accident.',
            steps: [
              'Platform-independent - code compiled once (into .class bytecode) runs on Windows, macOS or Linux without changes.',
              'Object-oriented - everything is organized around "objects" that bundle data and behavior together, which keeps large programs manageable.',
              'Automatic memory management - a background process called the "garbage collector" frees memory you are no longer using, so you rarely have to do it by hand.',
              'Strongly typed - the compiler catches many mistakes (like mixing text and numbers incorrectly) before the program even runs.',
              'Huge ecosystem - millions of existing libraries and frameworks (like Spring) mean you rarely build everything from scratch.'
            ],
            videos: [
              { label: 'Search: "features of Java Apna College"', url: 'https://www.youtube.com/results?search_query=features+of+java+apna+college' }
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
            code: 'public class Hello {\n  public static void main(String[] args) {\n    System.out.println("Hello, Skillverse!");\n  }\n}',
            videos: [
              { label: 'Search: "first Java program tutorial for beginners"', url: 'https://www.youtube.com/results?search_query=first+java+program+tutorial+for+beginners' }
            ] },
          { key: 'compile', label: 'Compilation flow', heading: 'What actually happens when you run a Java program',
            body: 'Java uses a two-step process that is different from purely compiled or purely interpreted languages - this is the real secret behind "write once, run anywhere".',
            steps: [
              'Step 1 - You write code and save it as Hello.java (the source code, in plain text).',
              'Step 2 - You run the compiler: javac Hello.java. This checks your code for errors and converts it into Hello.class (bytecode) - not directly into machine code.',
              'Step 3 - Bytecode is a universal format that no specific computer understands directly - it is a middle language made for the JVM.',
              'Step 4 - You run the program: java Hello. The JVM on your machine reads the bytecode and translates it into instructions your specific computer/OS understands, on the fly.',
              'Step 5 - Because every operating system has its own JVM, but bytecode looks the same everywhere, the same .class file runs unchanged on Windows, Mac or Linux.'
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
              'In 1969-1972, Dennis Ritchie at Bell Labs needed a language to rewrite the Unix operating system, which was originally written in assembly language (very hard to maintain).',
              'C was designed to be close to hardware (fast, direct memory access) while still being easier to read and write than assembly.',
              'Unix, rewritten in C, became hugely influential - and because Unix spread to universities and companies worldwide, C spread with it.',
              'Almost every major language after C - including C++, Java, Python and JavaScript - borrowed syntax ideas (like curly braces and semicolons) directly from C.',
              'Today C is still the language of choice for operating systems, embedded devices (like microwaves and cars), and anywhere raw speed matters most.'
            ],
            videos: [
              { label: 'Search: "history of C programming language"', url: 'https://www.youtube.com/results?search_query=history+of+c+programming+language' }
            ] },
          { key: 'structure', label: 'Structure of a C program', heading: 'The structure of every C program',
            body: 'C programs always follow the same basic skeleton - once you recognize it, every new program looks familiar.',
            steps: [
              '#include <stdio.h> - this line brings in a "library" of ready-made tools; stdio.h specifically gives you input/output functions like printf.',
              'int main() { ... } - just like Java\'s main method, this is where the program starts running.',
              'Statements inside the curly braces run one after another, top to bottom, unless you use loops or conditions to change that order.',
              'return 0; at the end tells the operating system "the program finished successfully" - this is a C convention you will see everywhere.',
              'Every statement ends with a semicolon ; - forgetting this is the single most common beginner mistake in C.'
            ],
            videos: [
              { label: 'Search: "structure of C program CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=structure+of+c+program+codewithharry' }
            ] },
          { key: 'features', label: 'Key features', heading: 'Key features of C',
            body: 'C\'s design choices are almost the opposite of a "safe and automatic" language like Java - and that trade-off is exactly its strength.',
            steps: [
              'Procedural - programs are written as a sequence of steps and functions, not objects (there is no built-in class system in plain C).',
              'Manual memory management - you allocate and free memory yourself (using functions like malloc and free), giving full control but requiring discipline.',
              'Pointers - variables that store memory addresses directly, letting you manipulate data very efficiently (this is C\'s most famous, and trickiest, feature).',
              'Very close to machine code - a C compiler produces highly optimized, fast executables, which is why performance-critical software still uses C.',
              'Minimal built-in safety nets - the compiler will let you make mistakes that a language like Java would block, so careful testing matters more.'
            ],
            videos: [
              { label: 'Search: "features of C language explained"', url: 'https://www.youtube.com/results?search_query=features+of+c+language+explained' }
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
            code: '#include <stdio.h>\n\nint main() {\n  printf("Hello, Skillverse!\\n");\n  return 0;\n}',
            videos: [
              { label: 'Search: "first C program hello world tutorial"', url: 'https://www.youtube.com/results?search_query=first+c+program+hello+world+tutorial' }
            ] },
          { key: 'compile', label: 'Compilation flow', heading: 'What happens when you compile a C program',
            body: 'Unlike Java, C compiles directly to machine code in one straightforward pipeline - no separate "bytecode" step.',
            steps: [
              'Step 1 - You write your code and save it as hello.c.',
              'Step 2 - Preprocessing - lines starting with # (like #include) are expanded/replaced before real compilation begins.',
              'Step 3 - Compilation - the compiler (e.g. gcc) translates your C code into assembly, then into object code (machine instructions), producing a file like hello.o.',
              'Step 4 - Linking - the linker combines your object code with any library code it depends on (like the printf function) into one final executable file.',
              'Step 5 - You run the executable directly (e.g. ./a.out or hello.exe) - at this point it is pure machine code, with no translator needed at runtime, which is why C programs start up and run so fast.'
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
              'In 1979, Bjarne Stroustrup started work at Bell Labs (the same lab where C was born) on a project called "C with Classes".',
              'His goal was to add object-oriented programming (classes, objects) to C without losing C\'s raw performance.',
              'In 1983 the language was renamed C++ - the name itself is a programming joke: ++ is C\'s "increment" operator, meaning "one step beyond C".',
              'Over the following decades, C++ added templates, the Standard Template Library (STL), and many modern features, while staying backward-compatible with most C code.',
              'Today C++ is used for game engines, high-frequency trading systems, and any software where both speed and large-scale organization matter.'
            ],
            videos: [
              { label: 'Search: "history of C++ explained"', url: 'https://www.youtube.com/results?search_query=history+of+c%2B%2B+explained' }
            ] },
          { key: 'oop', label: 'OOP basics', heading: 'Classes and objects - the core idea C++ added to C',
            body: 'Object-oriented programming is the biggest conceptual jump from C to C++ - it changes how you organize an entire program. In simple words: a class is like a recipe, and an object is the actual dish you cook from it.',
            steps: [
              'A class is a blueprint - for example, a "Car" class might define that every car has a color, a speed, and a "drive" action.',
              'An object is one specific instance built from that blueprint - "my red car" is an object of the Car class.',
              'This groups related data (color, speed) and behavior (drive) into one unit, instead of scattering related variables and functions separately like in C.',
              'Classes also support encapsulation - hiding internal details so other parts of the program can only interact through a controlled, intentional interface.',
              'This same "class and object" idea is what Java also uses - which is why C++ knowledge transfers easily into learning Java.'
            ],
            videos: [
              { label: 'Search: "OOP classes and objects C++ simple explanation"', url: 'https://www.youtube.com/results?search_query=oop+classes+and+objects+c%2B%2B+simple+explanation' }
            ] },
          { key: 'features', label: 'Key features', heading: 'Key features of C++',
            body: 'C++ is often called a "multi-paradigm" language because it lets you mix different styles depending on what a problem needs.',
            steps: [
              'Multi-paradigm - you can write plain procedural code (like C) or full object-oriented code (like Java) in the same program.',
              'Manual memory control - like C, you can manage memory directly, giving high performance but requiring careful handling.',
              'The Standard Template Library (STL) - a large collection of ready-made, well-tested data structures (like lists and maps) so you don\'t rebuild them from scratch.',
              'Strong performance - compiled directly to machine code, C++ is a top choice when speed is critical (games, simulations, real-time systems).',
              'Backward compatibility - most valid C code can be compiled as C++, which made adoption easier for teams already using C.'
            ],
            videos: [
              { label: 'Search: "features of C++ language tutorial"', url: 'https://www.youtube.com/results?search_query=features+of+c%2B%2B+language+tutorial' }
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
            code: '#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello, Skillverse!" << endl;\n  return 0;\n}',
            videos: [
              { label: 'Search: "first C++ program hello world"', url: 'https://www.youtube.com/results?search_query=first+c%2B%2B+program+hello+world' }
            ] },
          { key: 'compile', label: 'Compilation flow', heading: 'What happens when you compile a C++ program',
            body: 'The C++ compilation pipeline mirrors C\'s almost exactly, just with a compiler that also understands classes and objects.',
            steps: [
              'Step 1 - Write your code and save it as hello.cpp.',
              'Step 2 - Preprocessing - #include lines are expanded before real compilation starts.',
              'Step 3 - Compilation - a compiler like g++ translates your code into object code, checking types and class structures along the way.',
              'Step 4 - Linking - your object code is combined with any needed library code into one executable file.',
              'Step 5 - You run the final executable directly - like C, there is no runtime translator needed, which keeps C++ programs fast.'
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
        title: 'Python Programming — I (Semester V)',
        topics: [
          { key: 'unit1', label: 'Introduction', heading: 'Unit I — Introduction to Python Programming',
            body: 'In simple words: this unit is about getting to know Python before writing any real code - what it is, where it came from, and getting it installed on your computer.',
            steps: [
              'Introduction to Python - what the language is, in plain terms: a programming language designed to be easy to read and quick to write.',
              'History of Python - how and why the language was created.',
              'Versions of Python - the major releases and how they differ from one another.',
              'Need and features of Python - why this language was designed the way it was, and what makes it different from languages like Java or C.',
              'Applications of Python - the real-world fields (web development, data science, automation, AI) where Python is actually used today.',
              'Installing Python on Linux and Windows - step-by-step, getting the Python interpreter set up on your own machine.',
              'Installing a Python IDE - setting up an editor (like PyCharm, VS Code or Thonny) so you can comfortably write and run code.'
            ],
            videos: [
              { label: 'Search: "Python installation Windows CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+installation+windows+codewithharry' },
              { label: 'Search: "history and features of Python explained"', url: 'https://www.youtube.com/results?search_query=history+and+features+of+python+explained' }
            ] },

          { key: 'unit2', label: 'Basics', heading: 'Unit II — Basics of Python Programming',
            body: 'This unit covers the actual building blocks every Python program is made of - in simple words, the "words" and "grammar" of the language.',
            steps: [
              'Python identifiers, variables and keywords - the rules for naming things in a program, and words Python reserves for itself and won\'t let you use as names.',
              'Putting comments - writing notes in your code (using #) that Python completely ignores when running - just for humans reading the code.',
              'Expressions and statements - the difference between a small piece of code that produces a value (like 2 + 2) and a complete instruction (like printing something).',
              'Standard data types - Basic types, None, Boolean, and Numbers, and how Python represents each one internally.',
              'Type conversion functions - converting a value from one data type to another, e.g. turning the text "5" into the number 5.',
              'Operators in Python, and operator precedence - the symbols that perform calculations or comparisons (+, -, ==, and, or), and the order they run in when combined.',
              'Accepting input and displaying output - reading what a user types on the keyboard, and showing results back to them on screen.',
              'Flow control: conditional statements - making a program choose between different paths using if / elif / else, in plain words: "do this if true, otherwise do that".',
              'Looping statements, and the break, continue and pass statements - repeating a block of code, and controlling exactly how and when that repetition stops or skips.'
            ],
            code: 'age = int(input("Enter your age: "))\n\nif age >= 18:\n    print("You can vote.")\nelse:\n    print("Not yet eligible to vote.")\n\nfor i in range(3):\n    if i == 1:\n        continue  # skip this round\n    print("Round:", i)',
            videos: [
              { label: 'Search: "Python variables and data types CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+variables+and+data+types+codewithharry' },
              { label: 'Search: "Python if else loops Apna College"', url: 'https://www.youtube.com/results?search_query=python+if+else+loops+apna+college' }
            ] },

          { key: 'unit3', label: 'Strings & Lists', heading: 'Unit III — Python Strings',
            body: 'This unit covers two of Python\'s most-used data structures: text (strings) and ordered collections (lists) - in simple words, how Python stores and works with words and groups of items.',
            steps: [
              'Introduction to strings - string literals, and assigning a string to a variable, including multiline strings (text that spans several lines).',
              'Operations on strings - the index operator, used for picking out individual characters of a string by their position.',
              'String methods, length, and the slice operator - built-in tools for transforming and measuring text, and pulling out just a part of it.',
              'String comparison - how Python decides whether two strings are equal, or which one comes first alphabetically.',
              'Concepts of Python lists - creating a list, initializing it with values, and accessing individual elements inside it.',
              'Traversing, updating and deleting elements from lists - looping through a list, changing an item in it, and removing items from it.',
              'List operations - concatenation (joining two lists together), indexing, and slicing (grabbing a portion of a list).',
              'Built-in list functions and methods, plus aliasing and cloning lists - understanding the difference between two variables pointing to the same list versus having their own independent copies.'
            ],
            code: 'name = "Skillverse"\nprint(name[0])         # first character\nprint(name[-1])        # last character\nprint(name[0:5])       # slice: first 5 characters\nprint(name.upper())    # built-in string method\n\nlanguages = ["Java", "C", "C++"]\nlanguages.append("Python")\nprint(languages)',
            videos: [
              { label: 'Search: "Python strings tutorial Telusko"', url: 'https://www.youtube.com/results?search_query=python+strings+tutorial+telusko' },
              { label: 'Search: "Python lists explained CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+lists+explained+codewithharry' }
            ] },

          { key: 'unit4', label: 'Tuples & Functions', heading: 'Unit IV — Python Tuples, Dictionary and Functions',
            body: 'This unit covers Python\'s fixed (unchangeable) collection type, and how to organize code into reusable blocks called functions - in simple words, "locked" lists, and named recipes you can reuse.',
            steps: [
              'Introduction to tuples - creating a tuple, and how it differs from a list (a tuple cannot be changed once it is created).',
              'Deleting tuples, and accessing elements in a tuple - reading values out of a tuple, and removing a tuple entirely.',
              'Tuple operations - concatenation, repetition, membership (checking if a value exists inside it), and iteration (looping through it).',
              'Built-in tuple functions and methods - the ready-made tools Python provides for working with tuples.',
              'Introduction to functions - defining a function using def, and calling (running) it elsewhere in your program.',
              'Function arguments - required arguments, keyword arguments, default arguments, and variable-length arguments (functions that can accept any number of inputs).',
              'Scope of variables - understanding which parts of a program are allowed to "see" and use a given variable.',
              'Void functions versus functions that return values - the difference between a function that just performs an action and one that hands back a result you can use.',
              'Recursion - in simple words, a function that calls itself to solve a smaller version of the same problem, until it reaches a simple base case.',
              'Advanced function topics - anonymous functions (lambda), and mapping a function across an entire collection of items at once.'
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
              'Overview of OOP terminology - getting familiar with words like class, object, attribute and method before using them in code.',
              'Creating classes - defining a blueprint for an object using the class keyword.',
              'Creating instance objects, and accessing attributes - making an actual object from a class, and reading the values stored inside it.',
              'Built-in class attributes, and garbage collection/constructors - special values Python gives every class automatically, and how the __init__ method sets up a brand-new object.',
              'Overloading methods and operators - letting ordinary operators like + behave in a custom way for your own objects.',
              'Inheritance - implementing a subclass and overriding methods - building a new class that reuses an existing one, then customizing specific parts of it.'
            ],
            code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        print(self.name, "makes a sound")\n\nclass Dog(Animal):          # inheritance\n    def speak(self):        # overriding the method\n        print(self.name, "barks")\n\nd = Dog("Tommy")\nd.speak()',
            videos: [
              { label: 'Search: "Python OOP classes and objects CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+oop+classes+and+objects+codewithharry' },
              { label: 'Search: "Python inheritance explained simple"', url: 'https://www.youtube.com/results?search_query=python+inheritance+explained+simple' }
            ] },

          { key: 'unit2', label: 'Exceptions & Regex', heading: 'Unit II — Python Exception Handling and Regular Expressions',
            body: 'In simple words: exception handling is how a program catches its own mistakes gracefully instead of crashing; a regular expression is a mini search-pattern for finding specific text.',
            steps: [
              'Introduction, and the difference between a syntax error and an exception - a syntax error means the code itself is written wrong; an exception is a problem that happens while otherwise-correct code is running.',
              'Handling exceptions with try and except - wrapping risky code so that if something goes wrong, your program handles it instead of stopping completely.',
              'Multiple except clauses - reacting differently depending on which specific type of error occurred.',
              'try...finally - a block of code that always runs at the end, whether or not an error happened.',
              'Raising exceptions, and creating user-defined exceptions - deliberately signaling an error yourself, including designing your own custom error types.',
              'A quick look at the list of standard exceptions - the common built-in error types you will run into most often.',
              'Regular expressions - a compact way of describing a text pattern (like "an email address") so Python can search for or validate it.'
            ],
            code: 'try:\n    num = int(input("Enter a number: "))\n    print(10 / num)\nexcept ZeroDivisionError:\n    print("You cannot divide by zero!")\nexcept ValueError:\n    print("That was not a valid number.")\nfinally:\n    print("Done checking.")\n\nimport re\nemail = "student@skillverse.com"\nif re.match(r"^[\\w\\.]+@[\\w]+\\.[a-z]+$", email):\n    print("Looks like a valid email")',
            videos: [
              { label: 'Search: "Python try except exception handling CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+try+except+exception+handling+codewithharry' },
              { label: 'Search: "Python regular expressions regex tutorial"', url: 'https://www.youtube.com/results?search_query=python+regular+expressions+regex+tutorial' }
            ] },

          { key: 'unit3', label: 'File Handling', heading: 'Unit III — File Handling in Python',
            body: 'In simple words: this unit is about saving data to a file on disk, and reading it back later, plus managing files and folders from inside your code.',
            steps: [
              'File objects - understanding the special object Python gives you once a file is opened, which you then use to read or write.',
              'Writing text files, and appending text to a file - saving brand-new data, or adding more onto data that already exists in a file.',
              'Reading text files - pulling previously saved data back out so your program can use it.',
              'File exceptions - handling errors like trying to open a file that doesn\'t exist.',
              'Paths and directories, and related exceptions in the os module - working with folder locations on your computer\'s disk.',
              'Directory contents, and obtaining information about files - listing what\'s inside a folder, and checking details like a file\'s size or when it was last changed.',
              'Renaming, moving, copying and removing files - basic file management tasks done directly from Python code.',
              'Creating and removing directories, and globbing - making or deleting folders, and searching for files that match a pattern (like all ".txt" files).'
            ],
            code: '# writing to a file\nwith open("notes.txt", "w") as f:\n    f.write("Skillverse student notes\\n")\n\n# appending more text\nwith open("notes.txt", "a") as f:\n    f.write("Second line added later.\\n")\n\n# reading it back\nwith open("notes.txt", "r") as f:\n    print(f.read())',
            videos: [
              { label: 'Search: "Python file handling read write CodeWithHarry"', url: 'https://www.youtube.com/results?search_query=python+file+handling+read+write+codewithharry' }
            ] },

          { key: 'unit4a', label: 'GUI (Tkinter)', heading: 'Unit IV — Building a GUI with Tkinter',
            body: 'In simple words: so far every program has run in a plain text terminal - this unit is about giving a program actual clickable windows, buttons and boxes.',
            steps: [
              'GUI programming toolkits for Python, and an introduction to Tkinter - Python\'s own built-in library for building windows and on-screen controls.',
              'Creating GUI widgets with Tkinter - adding elements like buttons, labels and text boxes onto a window.',
              'Resizing the widget, and creating layouts - controlling how big each element is and where it sits on screen.',
              'Packing order, and controlling widget appearances - the rules for how widgets stack and arrange themselves inside a window.',
              'Radio buttons and checkboxes, and dialog boxes - common interactive controls, like the ones you click in any everyday desktop app.'
            ],
            code: 'import tkinter as tk\n\nwindow = tk.Tk()\nwindow.title("Skillverse")\n\nlabel = tk.Label(window, text="Welcome to Python GUI!")\nlabel.pack()\n\nbutton = tk.Button(window, text="Click me", command=lambda: print("Button clicked!"))\nbutton.pack()\n\nwindow.mainloop()',
            videos: [
              { label: 'Search: "Python Tkinter GUI tutorial for beginners"', url: 'https://www.youtube.com/results?search_query=python+tkinter+gui+tutorial+for+beginners' }
            ] },

          { key: 'unit4b', label: 'Python + MySQL', heading: 'Unit IV — Python with MySQL',
            body: 'In simple words: this unit connects Python to a real database, so your program\'s data is saved permanently instead of disappearing when the program closes.',
            steps: [
              'Introduction to MySQL, and installing a MySQL driver (MySQL Connector or MySQLdb) - the extra tool Python needs to be able to talk to a MySQL database.',
              'MySQL database connection with Python - the code that actually links your program to the database server.',
              'Creating a database in MySQL using Python, and creating a table - setting up storage structure directly from within your code.',
              'Insert, Select, Update and Delete operations - the four basic actions you can perform on data stored in a database table.',
              'COMMIT and ROLLBACK operations - COMMIT saves your changes permanently; ROLLBACK undoes them if something went wrong before saving.',
              'Disconnecting the database - properly closing the connection once your program is done using it.'
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
