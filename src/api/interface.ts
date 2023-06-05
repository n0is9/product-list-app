export interface Comment {
    id: number;
    productId: number;
    date: string;
    description: string;
}

export interface Product {
    imageUrl: string;
    name: string;
    count: number;
    weight: string;
    size: {
        width: number;
        height: number;
    };
}

export interface ProductResp extends Product {
    id: number;
    comments: Comment[];
}
