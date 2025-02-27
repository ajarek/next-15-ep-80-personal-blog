import MySocial from '@/components/MySocial'
import PostList from '@/components/PostList'

const Home = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start  gap-4 px-24 max-sm:px-4  '>
      <div className='flex flex-col items-start justify-center gap-4 '>
        <h1 className='text-2xl underline decoration-4 decoration-blue-500  '>Cześć, jestem Jarek ✋</h1>
        <p>
          Nazywam się Jarosław Kowalski i od ponad 35 lat żyję piłką nożną –
          dosłownie i w przenośni. Jako dziennikarz sportowy miałem okazję
          relacjonować najważniejsze wydarzenia piłkarskie, od lokalnych derbów
          po finały europejskich pucharów. Moje teksty ukazywały się na łamach
          największych sportowych serwisów w kraju, a teraz, na EkstraFutbol,
          dzielę się swoją pasją do Ekstraklasy – ligi, którą kocham i bez
          której weekendy nie miałyby sensu.
        </p>
        <MySocial/>
      </div>
        <div className='flex flex-col items-start justify-start gap-4 '>
          <h2 className='text-xl underline decoration-4 decoration-blue-500' >Ostatnie artykuły</h2>
          <PostList/>
        </div>
    </div>
  )
}
export default Home
