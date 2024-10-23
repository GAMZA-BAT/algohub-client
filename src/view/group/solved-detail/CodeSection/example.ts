export const cpp = `#include <iostream>
using namespace std;

int factorial(int n) {
  if (n <= 1)
    return 1;
  else
    return n * factorial(n - 1);
}

int factorial(int n) {
  if (n <= 1)
    return 1;
  else
    return n * factorial(n - 1);
}

int factorial(int n) {
  if (n <= 1)
    return 1;
  else
    return n * factorial(n - 1);
}

int main() {
  int number;
  cout << "Enter a positive integer: ";
  cin >> number;

  if (number < 0) {
    cout << "Factorial is not defined for negative numbers." << endl;
  } else {
    cout << "Factorial of " << number << " is " << factorial(number) << endl;
  }

  return 0;
}
`;

export const java = `import java.util.Scanner;

public class FactorialCalculator {

  public static int factorial(int n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  public static int factorial(int n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  public static int factorial(int n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter a positive integer: ");
    int number = scanner.nextInt();

    if (number < 0) {
      System.out.println("Factorial is not defined for negative numbers.");
    } else {
      System.out.println("Factorial of " + number + " is " + factorial(number));
    }

    scanner.close();
  }
}
`;

export const python = `def factorial(n):
  if n <= 1:
    return 1
  else:
    return n * factorial(n - 1)

def main():
  number = int(input("Enter a positive integer: "))

  if number < 0:
    print("Factorial is not defined for negative numbers.")
  else:
    print(f"Factorial of {number} is {factorial(number)}")

def main():
  number = int(input("Enter a positive integer: "))

  if number < 0:
    print("Factorial is not defined for negative numbers.")
  else:
    print(f"Factorial of {number} is {factorial(number)}")

def main():
  number = int(input("Enter a positive integer: "))

  if number < 0:
    print("Factorial is not defined for negative numbers.")
  else:
    print(f"Factorial of {number} is {factorial(number)}")

if __name__ == "__main__":
  main()
`;

export const javascript = `function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function main() {
  const number = parseInt(prompt("Enter a positive integer: "), 10);

  if (isNaN(number) || number < 0) {
    console.log("Factorial is not defined for negative numbers.");
  } else {
    console.log("Factorial of " + number + " is " + factorial(number));
  }
}

function main() {
  const number = parseInt(prompt("Enter a positive integer: "), 10);

  if (isNaN(number) || number < 0) {
    console.log("Factorial is not defined for negative numbers.");
  } else {
    console.log("Factorial of " + number + " is " + factorial(number));
  }
}

function main() {
  const number = parseInt(prompt("Enter a positive integer: "), 10);

  if (isNaN(number) || number < 0) {
    console.log("Factorial is not defined for negative numbers.");
  } else {
    console.log("Factorial of " + number + " is " + factorial(number));
  }
}

main();`;
