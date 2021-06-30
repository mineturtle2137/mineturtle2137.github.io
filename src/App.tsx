import styled, { ThemeProvider } from 'styled-components';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Api } from 'api/api';
import { SlideType } from 'utils/types';
import { PRODUCTS_STORAGE_KEY, theme, getStoredProducts, mapResponseDataToSlideType } from 'utils';
import { Slider, Header } from 'components';

const Container = styled.main`
    margin: calc(2 * 5vmin + 2rem) auto 5vmin;
    padding: 42px 22px 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

function App() {
    const storedProducts = () => getStoredProducts();
    const [products, setProducts] = useState<SlideType[]>(storedProducts);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await Api.getProducts();
                const products = mapResponseDataToSlideType(data);

                setProducts(products);

                const storageProducts = storedProducts();
                if (!storageProducts.length) localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProducts();
    }, []);

    if (error) return <div>{error}</div>;

    if (!products.length && !error) return <div>Loading...</div>;

    return (
        <ThemeProvider theme={theme}>
            <Header>Slider</Header>
            <Container>
                <Slider slides={products} autoplayInSeconds={5} />
            </Container>
        </ThemeProvider>
    );
}

export default App;
