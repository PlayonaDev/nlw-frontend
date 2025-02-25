import Image from 'next/image';
import gold from '../../../assets/medal-gold.svg';
import silver from '../../../assets/medal-silver.svg';
import cooper from '../../../assets/medal-cooper.svg';
import { getRanking } from '@/http/api';
export async function Ranking() {
    const { ranking } = await getRanking();
    return (
        <div className='w-full max-w-[440px] space-y-5'>
            <h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>Ranking de indicações</h2>

            <div className='space-y-4'>
                {ranking.map((item, index) => {
                    const rankingPosition = index + 1;

                    return (
                        <div key={item.id} className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                            <span className='text-sm text-gray-300 leading-none'>
                                <span className='text-purple text-sm font-heading font-semibold mr-2'>{rankingPosition}° | </span>
                                {item.name}</span>
                            <span className='text-2xl text-gray-200 font-semibold font-heading leading-none'>{item.score}</span>

                            {rankingPosition === 1 && <Image src={gold} alt="devstage" className='absolute top-0 right-8' width={40} height={40} />}
                            {rankingPosition === 2 && <Image src={silver} alt="devstage" className='absolute top-0 right-8' width={40} height={40} />}
                            {rankingPosition === 3 && <Image src={cooper} alt="devstage" className='absolute top-0 right-8' width={40} height={40} />}

                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}