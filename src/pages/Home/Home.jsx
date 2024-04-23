import React from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import chatIcon from '../../assets/img/icon-chat-S.webp';
import moneyIcon from '../../assets/img/icon-money-S.webp';
import securityIcon from '../../assets/img/icon-security-S.webp';
import './_Home.scss'

const items = [
  {
    icon: chatIcon,
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    icon: moneyIcon,
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: securityIcon,
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

export default function Home() {
  return (
    <div>
      <Banner/>
      <section className='features'>
        {items.map((item) => (     
          <Card icon={item.icon} title={item.title} text={item.text} key={item.title}/> 
        ))}
      </section>
    </div>
  )
}
