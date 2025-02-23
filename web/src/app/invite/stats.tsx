import { MousePointerClick, BadgeCheck, MedalIcon } from "lucide-react";

export function Stats() {
    return (
        <div className='grip gap-3 md:grid-cols-3'>
            <div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
                <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>1041</span>
                <span className='text-sm text-gray-300 leading-none text-center'>Acesso aos link</span>
                <MousePointerClick className='size-5 text-purple absolute top-3 left-3' />
            </div>
            <div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
                <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>743</span>
                <span className='text-sm text-gray-300 leading-none text-center'>Inscrições feitas</span>
                <BadgeCheck className='size-5 text-purple absolute top-3 left-3' />
            </div>
            <div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
                <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>743</span>
                <span className='text-sm text-gray-300 leading-none text-center'>Posição no ranking</span>
                <MedalIcon className='size-5 text-purple absolute top-3 left-3' />
            </div>
        </div>);
}