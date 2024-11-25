import Link from 'next/link'

import widgetStyles from '@styles/widget.module.css'

import Joy from './components/topics/joystick/page'

export default function Home() {
  return (
        <div>
          
            <div className={widgetStyles.shape}>
              <Link href="/components/topics/joystick">
              </Link>
            </div>

        </div>
  );
}

//git being weird
