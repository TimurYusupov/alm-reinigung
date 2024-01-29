document.addEventListener('DOMContentLoaded', () => {
   // Smooth scrolling to target element, accounting for header height
   function scrollToTarget(target) {
      const headerHeight = document.querySelector('.header').offsetHeight
      const targetPosition = target.offsetTop - headerHeight - 15

      window.scrollTo({
         top: targetPosition,
         behavior: 'smooth'
      })
   }

   const menuLinks = document.querySelectorAll('.menu-link a')
   const footerLinks = document.querySelectorAll('.footer-sitemap a')

   menuLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
         event.preventDefault()
         const targetId = link.getAttribute('href')
         const targetElement = document.querySelector(targetId)
         if (targetElement) {
            scrollToTarget(targetElement)
         }
      })
   })

   footerLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
         event.preventDefault()
         const targetId = link.getAttribute('href')
         const targetElement = document.querySelector(targetId)
         if (targetElement) {
            scrollToTarget(targetElement)
         }
      })
   })

   // Adding click event listener to logo for scrolling to top
   const logo = document.querySelector('.logo svg')
   logo.addEventListener('click', (event) => {
      event.preventDefault()
      scrollToTarget(document.body)
   })

   // Modal Burger
   const burgerBtn = document.querySelector('.burger-menu')
   const modalBurger = document.querySelector('.modal-burger')
   const burgerMenuLinks = document.querySelectorAll('.burger-menu-link a')
   const burgerCloseBtn = document.querySelector('.close')

   burgerBtn.addEventListener('click', () => {
      modalBurger.style.display = 'block'
      modalBurger.classList.add('open')
   })

   burgerCloseBtn.addEventListener('click', () => {
      modalBurger.classList.remove('open')
      modalBurger.classList.add('closing')

      // After the closing animation finishes, remove the 'closing' class
      setTimeout(() => {
         modalBurger.style.display = 'none'
         modalBurger.classList.remove('closing')
      }, 300) // // Wait for the same duration as the animation (0.3s = 300ms)
   })

   burgerMenuLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
         e.preventDefault()
         const targetId = link.getAttribute('href')
         const targetElement = document.querySelector(targetId)
         if (targetElement) {
            scrollToTarget(targetElement)
         }
         // Close the burger menu
         modalBurger.classList.remove('open')
         modalBurger.classList.add('closing')
      })
   })

   // Changing background-color, svg color of icons and burger menu when scrolling
   const navBar = document.querySelector('.header')
   const menuLink = document.querySelectorAll('.menu-link')
   const menuLinkUnderline = document.querySelectorAll('.menu-link_underline')
   const headerLogoPaths = document.querySelectorAll('.logo svg path')
   const headerIcons = document.querySelectorAll('.social-icon svg path')
   const burgerMenu = document.querySelectorAll('.burger-menu div')

   window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
         // Changing color of NavBar
         navBar.classList.remove('white')
         Array.from(menuLink).forEach((el) => {
            el.style.color = '#fff'
         })
         Array.from(menuLinkUnderline).forEach((el) => {
            el.style.backgroundColor = '#fff'
         })
         navBar.classList.remove('shadow')
         // Changing color of Logo
         headerLogoPaths.forEach((path) => {
            path.style.fill = '#fff'
         })
         // Changing color of icons
         headerIcons.forEach((el) => {
            el.style.fill = '#fff'
         })
         // Changing color of Burger Menu
         burgerMenu.forEach((el) => {
            el.style.backgroundColor = '#fff'
         })
      } else {
         // Changing color of NavBar
         navBar.classList.add('white')
         Array.from(menuLink).forEach((el) => {
            el.style.color = '#333'
         })
         Array.from(menuLinkUnderline).forEach((el) => {
            el.style.backgroundColor = '#333'
         })
         navBar.classList.add('shadow')
         // Changing color of Logo
         headerLogoPaths.forEach((path) => {
            path.style.fill = 'black'
         })
         // Changing color of icons
         headerIcons.forEach((el) => {
            el.style.fill = 'black'
         })
         // Changing color of Burger Menu
         burgerMenu.forEach((el) => {
            el.style.backgroundColor = 'black'
         })
      }
   })

   // Modal for selected card
   const categoryCards = [
      {
         category: 'office-cleaning',
         title: 'Büroreinigung',
         img: 'img/categories/office.jpg',
         description:
            'Wir bieten professionelle Büroreinigungsdienste speziell für Anwälte und Notare an. Unsere maßgeschneiderten Reinigungslösungen sorgen für eine saubere und hygienische Arbeitsumgebung, die den professionellen Anforderungen gerecht wird. Verlassen Sie sich auf unser qualifiziertes Team, das mit Expertise und Sorgfalt Ihre Büroräume reinigt. Durch unsere zuverlässigen Reinigungsdienste können Sie sich auf Ihre Arbeit konzentrieren, während wir uns um die Sauberkeit und den guten Eindruck Ihres Büros kümmern. Lassen Sie uns die Büroreinigung für Sie übernehmen und beeindrucken Sie Ihre Kunden mit einem makellosen Arbeitsplatz.'
      },
      {
         category: 'gastro-cleaning',
         title: 'Gastroreinigung',
         img: 'img/categories/gastro-1.jpg',
         description:
            'Wir bieten professionelle Reinigungsdienstleistungen speziell für die Gastronomie an, um höchste Sauberkeitsstandards zu gewährleisten. Unsere geschulten Fachkräfte reinigen gründlich Küchen, Arbeitsflächen, Geräte und Sanitäranlagen, um eine hygienische Umgebung für Mitarbeiter und Gäste zu schaffen. Mit unserem Angebot unterstützen wir Gastronomiebetriebe dabei, sich auf ihr Kerngeschäft zu konzentrieren, während wir uns um die Reinigung kümmern.'
      },
      {
         category: 'window-cleaning',
         title: 'Fensterreinigung',
         img: 'img/categories/fenster-1.jpg',
         description:
            'Unser Reinigungsdienst bietet professionelle Fensterreinigung für Privathaushalte und Unternehmen. Wir reinigen gründlich und zuverlässig alle Fenster, einschließlich Rahmen und Fensterbänke. Wir sind stolz darauf, einen zuverlässigen und termingerechten Service anzubieten, der Ihren individuellen Bedürfnissen gerecht wird. Bitte beachten Sie, dass wir keine Fassadenreinigung anbieten. Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren und Ihre Fenster in neuem Glanz erstrahlen zu lassen.'
      },
      {
         category: 'hotel-cleaning',
         title: 'Hotelreinigung',
         img: 'img/categories/hotel.jpg',
         description:
            'Wir bieten professionelle Reinigungsdienstleistungen speziell für Hotels an. Unser qualifiziertes Team sorgt für Sauberkeit und Hygiene in den Hotelzimmern, Gemeinschaftsbereichen und anderen Bereichen des Hotels. Unser Hotelreinigungsdienst legt besonderen Wert auf die Einhaltung der höchsten Standards, um sicherzustellen, dass die Gäste Ihres Hotels einen makellos sauberen und komfortablen Aufenthalt genießen können. Vertrauen Sie auf unsere langjährige Erfahrung und lassen Sie uns Ihre Hotelreinigung übernehmen. Kontaktieren Sie uns für weitere Informationen und ein individuelles Angebot.'
      },
      {
         category: 'law-office-cleaning',
         title: 'Kanzleireinigung',
         img: 'img/categories/kanzlei.jpg',
         description:
            'Wir sind darauf spezialisiert, Anwaltskanzleien und Notariate sauber und ordentlich zu halten. Wir wissen, dass Sauberkeit und Hygiene in diesen Räumlichkeiten von größter Wichtigkeit sind, um einen professionellen Eindruck zu hinterlassen. Unsere Reinigungsfirma verwendet ausschließlich die neuesten Reinigungsmittel und -technologien, um eine gründliche Reinigung zu gewährleisten. Wir kümmern uns nicht nur um die Büros, sondern auch um die öffentlichen Bereiche wie Empfangsbereiche und Konferenzräume. Wir arbeiten eng mit Kanzleimanager zusammen, um sicherzustellen, dass die Reinigung den Bedürfnissen der Kanzlei entspricht.'
      },
      {
         category: 'medical-cleaning',
         title: 'Ordinationsreinigung',
         img: 'img/categories/ordination.jpg',
         description:
            'Wir bieten eine professionelle Ordinationsreinigung speziell für Zahnärzte, Hausärzte und Tierärzte an. Unsere Reinigungsservices umfassen die gründliche Reinigung und Desinfektion von Böden, Oberflächen, Wartezimmern, Behandlungsräumen und Sanitäranlagen. Wir legen großen Wert auf Sauberkeit, Hygiene und ein gesundes Umfeld für Ihre Patienten. Unsere erfahrenen Reinigungsteams verwenden hochwertige Reinigungsmittel und modernste Ausrüstung, um beste Ergebnisse zu erzielen. Vertrauen Sie auf unsere Kompetenz und Zuverlässigkeit bei der Reinigung Ihrer Ordination.'
      },
      {
         category: 'apartment-cleaning',
         title: 'Wohnungsreinigung',
         img: 'img/categories/wohnung.jpg',
         description:
            'Wir bieten professionelle Unterhaltsreinigung für Privatwohnungen und Häuser an. Unsere qualifizierten Reinigungsteams sorgen für Sauberkeit und Hygiene in Ihren Räumlichkeiten. Ob regelmäßige Reinigungstermine oder einmalige Aufträge - wir passen unser Angebot individuell an Ihre Bedürfnisse an. Verlassen Sie sich auf unsere Erfahrung und Kompetenz für ein sauberes Zuhause oder Büro. Kontaktieren Sie uns jetzt, um Ihr Zuhause in einen makellosen Zustand zu versetzen und von unserem erstklassigen Reinigungsservice zu profitieren.'
      },
      {
         category: 'tatort-cleaning',
         title: 'Tatortreinigung',
         img: 'img/categories/tatort.jpg',
         description:
            'Unsere Firma ist auf die gründliche Reinigung von Tatorten spezialisiert, darunter Mord- oder Unfallorte. In belastenden Momenten übernehmen wir diskret die hygienische Wiederherstellung. Unser geschultes Team entsorgt Rückstände gemäß Vorschriften und bewährten Methoden. Wir reinigen sorgfältig Oberflächen wie Teppiche, Polstermöbel, Wände und Böden. Unsere Dienstleistung umfasst die Beseitigung von Blutspuren, Gewebe und anderen kontaminierten Substanzen, sowie Geruchsbeseitigung, um den Tatort bewohnbar zu machen. Vertrauen Sie unserer jahrelangen Erfahrung und Professionalität. Diskretion, Vertraulichkeit und die Wiederherstellung eines bewohnbaren Umfelds stehen im Fokus unserer Arbeit. Kontaktieren Sie uns für weitere Informationen.'
      }
   ]

   const modalCategory = document.querySelector('.modal-category')
   const modalCategoryImg = document.querySelector('.modal-category img')
   const modalCategoryTitle = document.querySelector('.modal-category h3')
   const modalCategoryDescription = document.querySelector('.modal-category p')
   const modalCategoryClose = document.querySelector('.modal-category__close')

   function updateDisplay() {
      if (window.innerWidth >= 768) {
         modalCategory.style.display = 'flex'
      } else {
         modalCategory.style.display = 'block'
      }
   }

   const cards = document.querySelectorAll('.card')
   cards.forEach((card) => {
      card.addEventListener('click', () => {
         const selectedCard = categoryCards.find((item) => item.category === card.id)
         updateDisplay()
         modalCategoryImg.src = selectedCard.img
         modalCategoryTitle.textContent = selectedCard.title.toUpperCase()
         modalCategoryDescription.textContent = selectedCard.description
         // Remove scrolling for body
         document.querySelector('body').style.overflow = 'hidden'
      })
   })

   // Close category modal when clicking X
   modalCategoryClose.addEventListener('click', () => {
      modalCategory.style.display = 'none'
      // Add scrolling for body
      document.querySelector('body').style.overflow = 'visible'
   })

   // Scrolling to contact when clicking link in modal
   const modalCategoryLink = document.querySelector('.modal-category a')
   modalCategoryLink.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = modalCategoryLink.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
         scrollToTarget(targetElement)
      }
      // Close the category modal
      modalCategory.style.display = 'none'
      // Add scrolling for body
      document.querySelector('body').style.overflow = 'visible'
   })

   // Scrolling to contacts when clicking button
   const introBtn = document.querySelector('.intro-btn')
   introBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = introBtn.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
         scrollToTarget(targetElement)
      }
   })

   // Accordion
   const accordions = document.querySelectorAll('.accordion')
   accordions.forEach((el) => {
      el.addEventListener('click', () => {
         el.classList.toggle('active')
         let panel = el.nextElementSibling
         if (panel.style.maxHeight) {
            panel.style.maxHeight = null
         } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
         }
      })
   })
})
