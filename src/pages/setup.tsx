import { useState, useEffect } from 'react'
import { SetupCard, SetupCardSkeleton } from "../components/cards/setup-card"
import { PageTitle } from "../components/page-title/page-title"
import { ScrollToTopButton } from "../components/scroll-to-top"

interface SetupItem {
  src: string;
  itemType: string;
  itemName?: string;
  url: string;
}

interface SetupData {
  workstation: SetupItem[];
  coding: SetupItem[];
  books: SetupItem[];
  newsletter: SetupItem[];
}

export function Setup() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<SetupData | null>(null)

  useEffect(() => {
    fetch('../data/setup-data.json')
      .then(response => response.json())
      .then(data => {
        setData(data)
        setTimeout(() => setLoading(false), 1000)
      })
  }, [])

  return (
    <section className="py-4 px-6 lg:px-64 w-full flex flex-col gap-3 text-justify pt-24 mb-16">
      <PageTitle>Setup</PageTitle>
      <nav className="flex gap-4 mb-8">
        <a href="#workstation-section" className="text-blue-500 hover:underline">Workstation</a>
        <a href="#coding-section" className="text-blue-500 hover:underline">Coding</a>
        <a href="#books-section" className="text-blue-500 hover:underline">Books</a>
        <a href="#newsletter-section" className="text-blue-500 hover:underline">Newsletter</a>
      </nav>
      <section className="flex flex-col">
        <div className="" id="workstation-section">
          <h3 className="mb-3 text-2xl">Workstation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              <>
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
              </>
            ) : (
              data?.workstation.map((item, index) => (
                <SetupCard key={index} {...item} />
              ))
            )}
          </div>
        </div>
        <div className="pt-20" id="coding-section">
          <h3 className="mb-3 text-2xl">Coding</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              <>
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
              </>
            ) : (
              data?.coding.map((item, index) => (
                <SetupCard key={index} {...item} />
              ))
            )}
          </div>
        </div>
        <div className="pt-20" id="books-section">
          <h3 className="mb-3 text-2xl">Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 tooltip-container">
            {loading ? (
              <>
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
              </>
            ) : (
              data?.books.map((item, index) => (
                <SetupCard key={index} {...item} />
              ))
            )}
          </div>
        </div>
        <div className="pt-20" id="newsletter-section">
          <h3 className="mb-3 text-2xl">Newsletter</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              <>
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
              </>
            ) : (
              data?.newsletter.map((item, index) => (
                <SetupCard key={index} {...item} />
              ))
            )}
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </section>
  )
}