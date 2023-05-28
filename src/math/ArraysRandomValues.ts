import { ProductType } from "src/types/productType.type"
import {ErrorMessages} from './error.enum'

export default new class ArrayRandomValue {

    private produtos: Array<ProductType>
    private numberOfRandomValues: Number

    
    private RandomObjects(produtos, numberOfRandomValues) {
        let result: any = []
        if(!produtos) {
            return ErrorMessages.INVALID_ARRAY_OF_PRODUCTS
        }
        if(numberOfRandomValues > produtos.length) {
            return ErrorMessages.LIMIT_EXCEEDED
        }
        if(numberOfRandomValues <= 0) {     
            return ErrorMessages.INVALID_NUMBER_OF_RANDOM_VALUES
        }
        while (result.length < numberOfRandomValues) {
            let randomIndex = Math.floor(Math.random() * produtos.length)
            let randomObject: any = produtos[randomIndex]
            if (!result.includes(randomObject)) {
                result.push(randomObject)
            }
        }
        return result
    }
    
    public getRandomObjects(): Array<ProductType> | String {
        return this.RandomObjects(this.produtos, this.numberOfRandomValues)
    }
    
    public setNumberOfRandomValues(num: Number): void {
        this.numberOfRandomValues = num
    }
    
    public getProdutos(): Array<ProductType> {
        return this.produtos
    }

    public getNumberOfRandomValues(): Number {
        return this.numberOfRandomValues
    }
    
    public setProdutos(produtos: Array<ProductType>): void {
    
        this.produtos = produtos
    }
}


