class Employee:
  
  # class variables 
  raise_percentage = 1.05
  
  num_of_emps = 0
  
  def __init__(self, name, age, email = '', pay = 0):
    self.name = name
    self.age = age
    self.email = email
    self.pay = pay
    
    Employee.num_of_emps +=1 
    
  def who_am_i(self, msg = 'Hi'):
    print(f'{msg}, I am {self.name} and i am {self.age} years old')
    
  def annual_raise(self):
    print(f'Instance: Salary raised by {int(self.pay)*self.raise_percentage}') # if you use self.raise_percentage then it will consider the instance
    print(f'Class Instance: Salary raised by {int(self.pay)*Employee.raise_percentage}\n') # if you use Employee.raise_percentage then it will consider 1.05

  @classmethod  
  def set_annual_raise(cls, amount):
    cls.raise_percentage = amount
    
  @classmethod
  def from_string(cls, emp_str): # from_string the prefix from is a convention
    name,age,email,pay = emp_str.split('-')
    return cls(name, int(age), email, int(pay))

  @staticmethod
  def is_workday(day):
    if day.weekday() == 5 or day.weekday() == 6:
      return False
    return True
    
  def __repr__(self): # Dunder representation
    return f'Employee({self.name}, {self.age}, {self.email}, {self.pay})'
  
  def __str__(self): # Dunder string representation
    return f'Employee Details:\nName: {self.name}\nAge: {self.age}\nPay: {self.pay}\nEmail: {self.email}'
    
  def __add__(self, other):
    return self.pay + other.pay
    
  @property # this makes sure that the salary_info is accessible as attribute
  def salary_info(self):
    return f'I am {self.name} and I earn {self.pay}'
    
  @salary_info.setter
  def salary_info(self, ananomous_name):
    self.name = ananomous_name

# Sub class --> Inherits the properties from Parent class
# Sub class is Developer and Parent class is Employee
class Developer(Employee):
  raise_percentage = 1.1
  
  def __init__(self, name, age, email, pay, skills):
    super().__init__(name, age, email, pay)
    self.skills = skills
    # Employee.__init__(self, name, age, email, pay)  # You could also use this

class Manager(Employee):
  def __init__(self, name, age, email, pay, employees = None):
    super().__init__(name, age, email, pay)
    self.employees = [] if employees is None else employees

  def add_employee(self, emp):
    if emp not in self.employees:
      self.employees.append(emp)
  
  def remove_employee(self, emp):
    if emp in self.employees:
      self.employees.remove(emp)
        
  def all_employess(self):
    print(self.name, '(Manager):')
    for emp in self.employees:
      print('==>', emp.name)
    
    
    

# Instance of an employee 1    
emp1 = Employee('varun', 20, '', 1000)

emp1.who_am_i('Hello!')

# You can also run methods via Class but you will have to pass the instance
Employee.who_am_i(emp1, 'Hola!')

# Instance of an employee 2
emp2 = Employee('Teja', 40, 'teja@tet.com', 1000)

emp2.who_am_i()

print('\nClass variables:')

emp1.raise_percentage = 1.02 # update for an instance the raise_percentage

print('Class variable: ', Employee.raise_percentage) # You can access the class variables from class
print('Instance variable: ', emp1.raise_percentage) # You can access the class variables from the instance of class
print('Instance variable: ', emp2.raise_percentage) # You can access the class variables from the instance of class

emp2.annual_raise()
emp1.annual_raise()

print('Class variable no of employee: ',Employee.num_of_emps) 


Employee.set_annual_raise(1.20) # Preferred way but you can also set it via class instance
print('\nClass Methods:')
print('Class variable: ', Employee.raise_percentage) # You can access the class variables from class
print('Instance variable: ', emp1.raise_percentage) # You can access the class variables from the instance of class
print('Instance variable: ', emp2.raise_percentage) # You can access the class variables from the instance of class

print('\nUsing class methods as alternative constructors: ')

emp3 = Employee.from_string('KP-30-kp@test.com-2000') 

emp3.who_am_i('Hey!')

print('\nStatic Methods: ')
import datetime

mydate = datetime.date(2025, 3, 13)
print(Employee.is_workday(mydate))


print('\nInheritance: ')

dev1 = Developer('varun', 20, 'varun@dev.com', 10000, ['Python', 'JavaScript'])

dev1.annual_raise() # As per instance raise_percentage is 1.1 but as per Class it considers 1.05

print(dev1.skills)

dev2 = Developer('Teja', 43, 'teja@dev.com', 10000, ['Go', 'JavaScript'])

manager1 = Manager('Shaun', 40, 'shaun@test.com', 10000, [dev1])

manager1.all_employess()

print('\n')

manager1.add_employee(dev2) # add employee

manager1.all_employess()

print('\n')

manager1.remove_employee(dev1) # remove employee

manager1.all_employess()

print('\n')

print('\nDunder Examples: \n')    
    
emp4 = Employee('KPVT', 25, 'kpvt@test.com', 3000)
  
print(emp4)

print(repr(emp4))
print(str(emp4))    

print(emp4.__repr__())
print(emp4.__str__())    
    
print('\n')

print('Add functionality using dunder: ',emp4+emp3) # emp4 pay is 3000 and emp3 pay is 2000

print('\nGettter, Setter, Deleters, Decorators: ')

print(emp4.salary_info)

emp4.salary_info = 'XXXX' # we have setter for the salary_info hence you can set the name

print(emp4.salary_info)


'''
Debug this:
x = [] # This initializes x as an empty list.

dir(x)
he dir() function returns a list of valid attributes and methods for the given object. Since x is a list, 
dir(x) will show the built-in methods and attributes available for lists.
These are the various dunder methods (__method__) and built-in list methods like append(), pop(), sort(), etc.

x.__dict__ 
his attempts to access the __dict__ attribute of x. However, lists (and most built-in types) 
do not have a __dict__ attribute because they are implemented in C and do not support instance-level attributes.

Trying x.__dict__ will raise an AttributeError: AttributeError: 'list' object has no attribute '__dict__'

Only objects with a customizable attribute dictionary (like instances of user-defined classes) have a __dict__.


help(x)
The help() function provides detailed documentation about the list object, including its methods, usage, and docstrings. 
Running help(x) (or help(list)) in Python will output the built-in documentation for lists.
'''


'''
Notes:
------------------------------------
Class – A blueprint for creating objects.

Methods – Functions inside a class. They usually take self (the instance) as the first argument.

Attributes – Variables that store data about an object.

Instance of a class – An object created from a class.

__init__ method – A special method (constructor) used to initialize attributes when an instance is created.

Class methods – Methods that take the class (cls) as the first argument instead of an instance. Defined using @classmethod.

Static methods – Methods that do not take self (instance) or cls (class) as arguments. Defined using @staticmethod.

Inheritance - A mechanism where a class (child/derived class) inherits attributes and methods from another class (parent/base class).

1. If an attribute or method is not found in the child class, Python searches up the inheritance chain (parent, grandparent, etc.).

Types of Inheritance:
1. Single Inheritance – One class inherits from another.
2. Multiple Inheritance – A class inherits from multiple parent classes.
3. Multilevel Inheritance – A class inherits from another class, which itself inherits from another class.
4. Hierarchical Inheritance – Multiple classes inherit from the same parent class.
5. Hybrid Inheritance – A mix of different types of inheritance.

isinstance(obj, Class) → Returns True if obj is an instance of Class (or its subclass), otherwise False.
issubclass(SubClass, ParentClass) → Returns True if SubClass is a subclass of ParentClass, otherwise False.


Magic/Dunder Methods - Special methods in Python that start and end with double underscores (__), 
also called "dunder" (short for double underscore).

They allow customization of built-in behavior (e.g., object creation, string representation, arithmetic operations).

__init__ is called as Dunder init. 
Some common Dunder methods are : __repr__ (Unambigious representation) & __str__ (Readable)

decorators, inheritance, property decorator, python main, scope of variables
'''