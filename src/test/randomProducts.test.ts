import ArrayRandomValue from "../math/ArraysRandomValues"
import {ErrorMessages} from '../math/error.enum'

describe('Produtos Aleatorios',()=>{
    test('Selecionando numero excedente de produtos aleatorios',()=>{
        ArrayRandomValue.setNumberOfRandomValues(1)
        expect(ArrayRandomValue.getRandomObjects()).toBe(ErrorMessages.INVALID_ARRAY_OF_PRODUCTS)
    })
    test('Selecionando numero excedente de produtos aleatorios',()=>{
        ArrayRandomValue.setProdutos([ { nome: "Papel", qtde: 15, preco: 3.99 },
        { nome: "Oculos", qtde: 3, preco: 649.5 },
        { nome: "Caderno", qtde: 4, preco: 27.1 },
        { nome: "Lapis", qtde: 3, preco: 5.82 },
        { nome: "Tesoura", qtde: 1, preco: 19.99 },
        { nome: "Estilete", qtde: 7, preco: 19.99 },
        { nome: "Teclado", qtde: 2, preco: 609.99 },
        { nome: "Mochila", qtde: 15, preco: 150.99 },
        { nome: "Tenis", qtde: 3, preco: 350.99 },
        { nome: "Fone", qtde: 5, preco: 198.99 },
    ])
        ArrayRandomValue.setNumberOfRandomValues(11)
        expect(ArrayRandomValue.getRandomObjects()).toBe(ErrorMessages.LIMIT_EXCEEDED)
    })

    test('Selecionando numero excedente de produtos aleatorios',()=>{
        ArrayRandomValue.setProdutos([ { nome: "Papel", qtde: 15, preco: 3.99 },
        { nome: "Oculos", qtde: 3, preco: 649.5 },
        { nome: "Caderno", qtde: 4, preco: 27.1 },
        { nome: "Lapis", qtde: 3, preco: 5.82 },
        { nome: "Tesoura", qtde: 1, preco: 19.99 },
        { nome: "Estilete", qtde: 7, preco: 19.99 },
        { nome: "Teclado", qtde: 2, preco: 609.99 },
        { nome: "Mochila", qtde: 15, preco: 150.99 },
        { nome: "Tenis", qtde: 3, preco: 350.99 },
        { nome: "Fone", qtde: 5, preco: 198.99 },
    ])
        ArrayRandomValue.setNumberOfRandomValues(0)
        expect(ArrayRandomValue.getRandomObjects()).toBe(ErrorMessages.INVALID_NUMBER_OF_RANDOM_VALUES)
    })
   

    
})