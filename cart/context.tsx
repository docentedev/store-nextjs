import * as React from "react";

const ContextOne: any = React.createContext({
    products: [],
});

/*
id: 0
quantity: 0,
data: any
*/

const initialState = {
    products: [],
};

type ProductCart = {
    id: string,
    quantity: number,
    product: any,
}

type State = {
    products: ProductCart[]
}

let reducer = (state: State, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "add-product":
            const product = action.payload
            const l = state.products
            const findedProductId = l.findIndex((p) => p.id === product.id)
            if (findedProductId !== -1) {
                l[findedProductId].quantity = l[findedProductId].quantity + 1
            } else {
                l.push({
                    id: product.id,
                    product,
                    quantity: 1,
                })
            }

            return {
                ...state,
                products: l
            };
        case "remove-product":
            const id = action.payload
            let list = state.products
            const fIndex = list.findIndex((p) => p.id === id)
            const p = list[fIndex]
            if (p) {
                const q = list[fIndex].quantity - 1
                if (q > 0) {
                    list[fIndex].quantity = q
                } else {
                    list = list.filter((p) => p.id !== id)
                }
            }
            return {
                ...state,
                products: list
            };
    }
};

const ContextOneProvider = (props) => {
    // [A]
    let [state, dispatch] = React.useReducer(reducer, initialState);
    const addProduct = product => dispatch({ type: "add-product", payload: product });
    const removeProduct = id => dispatch({ type: "remove-product", payload: id });

    let value = { state, addProduct, removeProduct, dispatch };

    // [B]
    return (
        <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
    );
}

let ContextOneConsumer = ContextOne.Consumer;

// [C]
export { ContextOne, ContextOneProvider, ContextOneConsumer };
