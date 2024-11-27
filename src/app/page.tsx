import widgetStyles from '@styles/widget.module.css'
import layoutStyles from '@styles/layout.module.css'
import Link from 'next/link'

import topicList from "@server/ros/topicList"

export default function Home(): JSX.Element {
  return (
    <ul className={layoutStyles.main}>
      {topicList.map((topic, index) => (
        <li key={index} className={widgetStyles.shape}>
          <Link href={`components/topics/${topic.path}`}>
            <topic.component></topic.component>
          </Link>
        </li>
      ))}
    </ul>
  );
}


