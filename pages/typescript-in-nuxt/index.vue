<script setup lang="ts">
// Basic TypeScript concepts
const name: string = 'Jose' // Declare a variable of type string
const lastName = 'Rios' // Declare a variable inferring type string

const age: number = 30 // Declare a variable of type number
const isActive: boolean = true // Declare a variable of type boolean
const fruits: string[] = ['apple', 'banana', 'cherry'] // Declare an array of type string

enum Color {
  Red,
  Green,
  Blue
} // Declare an enum

const favColor: Color = Color.Green // Declare a variable of type Color

const dynamicValue: any = 'Hello' // Declare a variable of any type
const unknownValue: unknown = 'Hello' // Declare a variable of unknown type

function example(param: string): number {
  return 123
}

function throwErr(msg: string): never {
  throw new Error(msg)
}

function logMessage(msg: string): void {
  console.log(msg)
}

interface Person {
  name: string,
  age: number,
  isActive: boolean
}

interface Employee {
  code: string
}

const personObj: Person = {
  name: 'Jose',
  age: 30,
  isActive: true
}

type EmployeeType = Person & Employee

const employeeObj: EmployeeType = {
  name: 'Jose',
  age: 30,
  isActive: true,
  code: '123'
}

// Vue component props with Typescript
interface Props {
  message: string,
  count: number
}
// const props = defineProps<Props>()

// GENERICS
function identity<T>(value: T): T {
  return value
}

const valueStr: string = identity('hello')
const valueNum: number = identity(111)


</script>

<template>
  <div>
    <h1>Typescript in Nuxt</h1>
    <ul>
      <li>Use <code>&lt;script setup lang="ts"&gt;&lt;/script&gt;</code> to use typescript</li>
    </ul>
  </div>
</template>

<style scoped>
code {
  background-color: gainsboro;
  padding: 2px 4px;
  border-radius: 4px;
}
</style>