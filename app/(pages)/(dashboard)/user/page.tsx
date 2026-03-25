import Image from 'next/image'
import userImage from '@/app/assets/de.webp'
export default function User() {
  return (
    <section className='min-h-screen min-w-full bg-slate-200'>
        <div className='flex flex-col gap-4'>
            <div className='w-10'>
                <Image
                    src={userImage}
                    alt='User'
                    className='w-full h-full'
                    quality={100}
                />
            </div>
        </div>
    </section>
  )
}
