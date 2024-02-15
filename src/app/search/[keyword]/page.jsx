import React from 'react';
import Movies from '@/components/Movies';

const Page = async ({ params }) => {
    const keyword = params.keyword;

    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=476d74ce1cac63e00c27431434114158&query=${keyword}&language=en-US&include_adult=false`);
        const data = await res.json();

        console.log(data, "data");

        return (
            <div className='flex item-center flex-wrap gap-3'>
                {
                    !data?.results ? (
                        <div>aranan öğe bulunamadı !!! </div>
                    ) : (
                        data?.results?.map((dt,i) => (
                            <Movies key={i} dt={dt}/>
                        ))
                    )
                }
            </div>
        );
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return null; // Hata durumunda null döndür
    }
}

export default Page;
