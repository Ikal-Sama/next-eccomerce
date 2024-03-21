import  ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";


export const client = createClient({
    projectId: 'f1w76x44',
    dataset: 'production',
    apiVersion: '2024-03-21',
    useCdn: true
})

const builder = ImageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}
