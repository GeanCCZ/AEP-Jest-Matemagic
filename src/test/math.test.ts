import {describe, expect, test} from '@jest/globals'
import matemagica from '../math/matemagica'

describe('Somando',()=>{
    test('Somando dois numeros',()=>{
        matemagica.setA(1)
        matemagica.setB(8)
        expect(matemagica.getSomatoria()).toBe(9)
    })
})

describe('Subtraindo',()=>{
    test('Subtraindo dois numeros',()=>{
        matemagica.setA(1)
        matemagica.setB(8)
        expect(matemagica.getSubtracao()).toBe(-7)
    })
})

describe('Dividindo',()=>{
    test('Dividindo dois valores',()=>{
        matemagica.setA(100)
        matemagica.setB(8)
        expect(matemagica.getDivisao()).toBe(12.5)
    })
})

describe('Multiplicando',()=>{
    test('Multiplicando dois valores',()=>{
        matemagica.setA(50)
        matemagica.setB(8)
        expect(matemagica.getMultiplicacao()).toBe(400)
    })
})