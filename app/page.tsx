import Grid from 'components/grid'
import ProductGridItems from 'components/layout/product-grid-items'
import Fuse from 'fuse.js'
import { getCollections, getProducts } from 'lib/shopify'
import Link from 'next/link'
import { Suspense } from 'react'

export const runtime = 'edge'

export const metadata = {
                    description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
                    openGraph: {
                                        type: 'website',
                    },
}

export default async function HomePage() {
                    const products = await getProducts({
                                        query: '',
                                        sortKey: 'BEST_SELLING',
                    })

                    const collections = await getCollections()

                    //   console.log(products)

                    const options = {
                                        includeScore: true,
                                        // Search in `author` and in `tags` array
                                        keys: ['title'],
                    }

                    const fuse = new Fuse(products, options)

                    const result = fuse.search('Birichino')

                    console.log(result)

                    return (
                                        <>
                                                            {/* <Searchbox people={products} /> */}
                                                            <div className="my-20">
                                                                                <h1 className="mb-10 text-5xl font-medium">
                                                                                                    Collections
                                                                                </h1>
                                                                                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                                                                                    {collections.map(
                                                                                                                        (
                                                                                                                                            collection,
                                                                                                                                            index,
                                                                                                                        ) => (
                                                                                                                                            <div
                                                                                                                                                                key={
                                                                                                                                                                                    index
                                                                                                                                                                }
                                                                                                                                            >
                                                                                                                                                                <Link
                                                                                                                                                                                    href={
                                                                                                                                                                                                        collection.path
                                                                                                                                                                                    }
                                                                                                                                                                                    className="flex h-20 items-center justify-center border"
                                                                                                                                                                >
                                                                                                                                                                                    {
                                                                                                                                                                                                        collection.title
                                                                                                                                                                                    }
                                                                                                                                                                </Link>
                                                                                                                                            </div>
                                                                                                                        ),
                                                                                                    )}
                                                                                </Grid>
                                                            </div>

                                                            <Suspense>
                                                                                <div className="my-20">
                                                                                                    <h1 className="mb-10 text-5xl font-medium">
                                                                                                                        Popular
                                                                                                                        Wines
                                                                                                    </h1>
                                                                                                    <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                                                                                                        <ProductGridItems
                                                                                                                                            products={products.slice(
                                                                                                                                                                0,
                                                                                                                                                                6,
                                                                                                                                            )}
                                                                                                                        />
                                                                                                    </Grid>
                                                                                </div>
                                                            </Suspense>
                                        </>
                    )
}
