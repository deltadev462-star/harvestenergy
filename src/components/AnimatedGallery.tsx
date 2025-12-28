import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
  imageUrl: string
}

const AnimatedGallery = ({ items }: { items: GalleryItem[] }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())
  const galleryRef = useRef<HTMLDivElement>(null)
  
  const selectedItem = items.find(item => item.id === selectedId)

  // Handle image loading
  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => new Set(prev).add(imageUrl))
  }

  // Handle image loading errors
  const handleImageError = (imageUrl: string) => {
    setFailedImages(prev => new Set(prev).add(imageUrl))
  }

  // Scroll-based reveal animation with IntersectionObserver
  useEffect(() => {
    if (!galleryRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('revealed')
            }, index * 100) // Stagger the animations
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    const items = galleryRef.current.querySelectorAll('[data-reveal]')
    items.forEach(item => observer.observe(item))

    return () => {
      items.forEach(item => observer.unobserve(item))
    }
  }, [items])

  useEffect(() => {
    if (selectedId) {
      const index = items.findIndex(item => item.id === selectedId)
      setCurrentIndex(index)
    }
  }, [selectedId, items])

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length
    setSelectedId(items[nextIndex].id)
  }

  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
    setSelectedId(items[prevIndex].id)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedId) return
    
    if (e.key === 'ArrowRight') handleNext()
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'Escape') setSelectedId(null)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedId, currentIndex])

  return (
    <>
      {/* Gallery Grid */}
      <div ref={galleryRef} className="gallery-grid">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={`item-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            className="gallery-item cursor-pointer"
            data-reveal
            style={{ transitionDelay: `${index * 0.1}s` }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="gallery-card-container gallery-hover group">
              {/* Show placeholder if image failed to load */}
              {failedImages.has(item.imageUrl) ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Image {item.id}</p>
                    <p className="text-xs text-gray-400 mt-1">Add photo-{item.id}.jpg</p>
                  </div>
                </div>
              ) : (
                <>
                  {!loadedImages.has(item.imageUrl) && (
                    <div className="gallery-image-loading" />
                  )}
                  <motion.img
                    src={item.imageUrl}
                    alt={item.title}
                    className="gallery-image"
                    layoutId={`image-${item.id}`}
                    onLoad={() => handleImageLoad(item.imageUrl)}
                    onError={() => handleImageError(item.imageUrl)}
                    style={{
                      opacity: loadedImages.has(item.imageUrl) ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                  
                  {/* Hover Overlay with Text */}
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <h3 className="gallery-overlay-title">{item.title}</h3>
                      <p className="gallery-overlay-category">{item.category}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            {/* Backdrop - Enhanced for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-40 touch-manipulation"
              onClick={() => setSelectedId(null)}
              onTouchEnd={() => setSelectedId(null)}
            />

            {/* Modal Content - Enhanced for mobile */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 touch-manipulation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              {/* Close Button - Enhanced for mobile */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-3 sm:p-2 text-white bg-black/50 hover:bg-black/70 rounded-full transition-all z-10 touch-manipulation"
                aria-label="Close image"
              >
                <X size={28} className="sm:w-6 sm:h-6" />
              </button>

              {/* Navigation Buttons - Enhanced for mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-3 text-white bg-black/50 hover:bg-black/70 rounded-full transition-all z-10 touch-manipulation"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} className="sm:w-[30px] sm:h-[30px]" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-3 text-white bg-black/50 hover:bg-black/70 rounded-full transition-all z-10 touch-manipulation"
                aria-label="Next image"
              >
                <ChevronRight size={32} className="sm:w-[30px] sm:h-[30px]" />
              </button>

              {/* Main Content with Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  layoutId={`item-${selectedId}`}
                  className="relative max-w-6xl w-full mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div
                    className="relative rounded-xl overflow-hidden"
                    layoutId={`image-container-${selectedId}`}
                  >
                    {failedImages.has(selectedItem.imageUrl) ? (
                      <div className="w-full h-[85vh] flex items-center justify-center bg-gray-800">
                        <div className="text-center text-white">
                          <ImageIcon className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                          <p className="text-xl">Image not available</p>
                          <p className="text-gray-400 mt-2">Please add photo-{selectedId}.jpg to the public folder</p>
                        </div>
                      </div>
                    ) : (
                      <motion.img
                        src={selectedItem.imageUrl}
                        alt={selectedItem.title}
                        className="w-full h-auto max-h-[85vh] object-contain"
                        layoutId={`image-${selectedId}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      />
                    )}
                  </motion.div>

                  {/* Progress Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                    <div className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                      {currentIndex + 1} / {items.length}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default AnimatedGallery