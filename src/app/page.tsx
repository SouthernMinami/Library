import BookInfo from './components/BookInfo'
import Search from './components/Search'

export default function Home() {
  return (
    <main className="bg-white grid grid-cols-12 flex items-center justify-center">
      <Search />
      <BookInfo url='https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=ISBN:0451526538'/>
    </main>
  )
}
