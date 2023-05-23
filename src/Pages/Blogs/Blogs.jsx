import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className="bg-blue-600 blog">
                <section className="">
                    <div className='card absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 bg-blue-100 rounded-lg shadow-xl'>
                        <h3 className='px-4 py-8 text-black text-2xl uppercase font-bold'>Frequently Asked Questions</h3>
                        <div>
                            <div className='card p-4'>
                                <details className='transition duration-500 bg-indigo-200	cursor-pointer p-8 border-solid border-l-8 border-indigo-400 rounded-md hover:bg-indigo-400'>
                                    <summary className='flex items-center justify-space-between focus:outline-none'>
                                        <header className='flex justify-center items-center'>
                                            <svg className='w-10 h-10' viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M32.6066 22H11.3934" stroke="#202842" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M22 11.3934V32.6066" stroke="#202842" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h1 className='leading-5 flex self-center text-black text-xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                                        </header>
                                    </summary>
                                    <div className='content ml-10 text-lg'>
                                        <p>An access token is a credential used to authenticate and authorize access to protected resources. It is short-lived and needs to be included in each request to access those resources.<br/>
                                            A refresh token is a long-lived token used to obtain a new access token when the current one expires. It is securely stored on the client-side.<br/>

                                            we can store it in local storage and more safely in HTTP-only.

                                        </p>
                                    </div>
                                </details>
                            </div>
                            <div className='card p-4'>
                                <details className='transition duration-500 bg-yellow-200	hover:bg-yellow-400 cursor-pointer p-8 border-solid border-l-8 border-yellow-400 rounded-md'>
                                    <summary className='flex items-center justify-space-between focus:outline-none'>
                                        <header className='flex justify-center items-center'>
                                            <svg className='w-10 h-10' viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M32.6066 22H11.3934" stroke="#202842" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M22 11.3934V32.6066" stroke="#202842" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h1 className='leading-5 flex self-center text-black text-xl'>Compare SQL and NoSQL databases?</h1>
                                        </header>
                                    </summary>
                                    <div className='content ml-10 text-lg'>
                                        <p className='list-disc p-4'>
                                            SQL databases are based on the relational data model and use structured tables with predefined schemas. They are suitable for applications with complex relationships and transactions.<br/>

                                            NoSQL databases utilize flexible data models and are designed for handling large amounts of unstructured or semi-structured data. They provide scalability and flexibility, making them ideal for applications that require quick iteration on the data model.<br/>

                                            In summary, SQL databases are rigid and suited for structured data, while NoSQL databases are flexible and excel with unstructured data and scalability.
                                        </p>
                                    </div>
                                </details>
                            </div>
                            <div className='card p-4'>
                                <details className='transition duration-500 bg-pink-200	hover:bg-pink-400 cursor-pointer p-8 border-solid border-l-8 border-pink-400 rounded-md'>
                                    <summary className='flex items-center justify-space-between focus:outline-none'>
                                        <header className='flex justify-center items-center'>
                                            <svg className='w-10 h-10' viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M32.6066 22H11.3934" stroke="#202842" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M22 11.3934V32.6066" stroke="#202842" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h1 className='leading-5 flex self-center text-black text-xl'>What is express js? What is Nest JS ?
                                            </h1>
                                        </header>
                                    </summary>
                                    <div className='content ml-10 text-lg'>
                                        <p>Express.js is a web application framework for Node.js that offers flexibility and simplicity. Nest.js is a scalable Node.js framework built with TypeScript, focusing on modular architecture and code organization.</p>
                                    </div>
                                </details>
                            </div>
                            <div className='card p-4'>
                                <details className='transition duration-500 bg-indigo-200	cursor-pointer p-8 border-solid border-l-8 border-indigo-400 rounded-md hover:bg-indigo-400'>
                                    <summary className='flex items-center justify-space-between focus:outline-none'>
                                        <header className='flex justify-center items-center'>
                                            <svg className='w-10 h-10' viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M32.6066 22H11.3934" stroke="#202842" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M22 11.3934V32.6066" stroke="#202842" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h1 className='leading-5 flex self-center text-black text-xl'>What is MongoDB aggregate and how does it work  ?
                                            </h1>
                                        </header>
                                    </summary>
                                    <div className='content ml-10 text-lg'>
                                        <p>MongoDB's aggregate is a feature that allows you to perform advanced data aggregation operations on collections. It uses a pipeline approach to process and transform documents, similar to SQL's GROUP BY and aggregate functions. It enables you to perform operations like filtering, grouping, sorting, and calculating aggregated values. It provides a flexible and efficient way to analyze and extract valuable insights from your data.</p>
                                    </div>
                                </details>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blogs;