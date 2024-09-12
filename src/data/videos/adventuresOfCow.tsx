import type { ReactNode } from 'react'
import type { TVideo } from '@types'

const descriptionJSX: ReactNode = (
  <div className='space-y-4'>
    <p>
      Performed by Choral Chameleon Ensemble at “Storytime: Part Two”  Filmed at Acme Studio in Williamsburg, Brooklyn, May 2015
    </p>
    <p>
      Music & Lyrics by Rob Mosher
    </p>
    <p>
      Incorporating text and images from &lsquo; Adventures of Cow by Cow&rsquo; by Lori Korchek and Marshall Taylor
    </p>
    <p>
      Published by Tricycle Press 2005

    </p>
    <p>
      Conducted by Vince Peterson

    </p>
    <p>
      Featuring:
      <br />
      Rob Mosher, Winds
      <br />
      Alex Canovas, Tenor
      <br />
      Erika Lloyd, Soprano
    </p>
    <p>
      Choral Chameleon Ensemble:
      <br />
      Erika Lloyd Liz Hanna Julie Waters Heather Michele Meyer Sharon Harms Kelly Baxter-Golding Jonathan May Bill Heigen Alex Canovas Kevin Rose Cameron Bernard Jones Mark Johnson Joseph Bellino Andy Cook-Feltz
    </p>
    <p>
      Stage Directed by Liz Ostler
      <br />
      Filmed & Edited by Memetic Studios
      <br />
      Produced by Nicole Belmont
      <br />
      <a href='https://www.choralchameleon.com/'>choralchameleon.com</a>
    </p>
  </div>
)

export const adventuresOfCow: TVideo = {
  description: descriptionJSX,
  imageSrc: '/images/videos/adventures-of-cow.png',
  title: 'Adventures of Cow',
  videoUrl: 'https://www.youtube.com/watch?v=HFcZVdLatm0',
}
