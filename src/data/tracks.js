export const initialTracks = [
  { key: 'java', name: 'Java', pillClass: 'pill-java', fee: 1499, chapters: 6, hasContent: true },
  { key: 'c', name: 'C', pillClass: 'pill-c', fee: 999, chapters: 4, hasContent: false },
  { key: 'cpp', name: 'C++', pillClass: 'pill-cpp', fee: 1299, chapters: 6, hasContent: false },
  { key: 'python', name: 'Python', pillClass: 'pill-python', fee: 1799, chapters: 5, hasContent: false }
];

export const theoryContent = {
  history: { h: 'History of Java', p: 'Java was created at Sun Microsystems in 1995, designed so one compiled program could run unchanged on any machine — "write once, run anywhere."' },
  jvm: { h: 'JVM · JRE · JDK', p: 'The JDK is what you install to write code. It contains the JRE, which runs programs. Inside the JRE sits the JVM, the engine that actually executes compiled bytecode on your machine.' },
  features: { h: 'Key features of Java', p: 'Platform-independent, object-oriented, and automatically manages memory through garbage collection — so you rarely worry about freeing memory yourself.' },
  first: { h: 'Your first Java program', p: 'Every Java program starts execution from a method called main. Here is the smallest complete program:', code: 'public class Hello {\n  public static void main(String[] args) {\n    System.out.println("Hello, Skillverse!");\n  }\n}' },
  compile: { h: 'Compilation flow', p: 'Java source (.java) is compiled into bytecode (.class) by javac. The JVM then reads that bytecode and runs it, which is what lets the same file run on Windows, macOS or Linux.' }
};
