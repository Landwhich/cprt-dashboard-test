import Link from 'next/link'

import widgetStyles from './components/styles/widget.module.css'

import Joy from './components/topics/joystick/page'

export default function Home() {
  return (
        <div>
          
            <div className={widgetStyles.shape}>
              <Link href="/components/topics/joystick">
              <Joy></Joy></Link>
            </div>

        </div>
  );
}
