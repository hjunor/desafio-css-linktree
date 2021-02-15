import React from 'react';
import"./styles.css"
import { Github } from '@styled-icons/boxicons-logos'
import { Linkedin } from '@styled-icons/boxicons-logos'
import { Instagram } from '@styled-icons/boxicons-logos'
import ButtonLink from '../Components/ButonLink';
import data from './links.json';

function Canva() {
  return (
    <div className="container">
      <img src="https://avatars.githubusercontent.com/u/40328847?s=460&u=b7c124618fd5ef80e713ba436231c4fb3ed66dec&v=4" alt="" srcset=""/>
      <h1> Heberth Junor</h1>
      <label className="work">Web Develop</label>
      <label className="description">Veja meu trabalho e estudos!!!</label>

      <div className="card">
        <div className='container-icon'>
         <a href="https://github.com/hjunor" className='link-icon'> <Github size='24' color='#fff'/></a>
         <a href="https://www.linkedin.com/in/hjunor/" className='link-icon'> <Linkedin size='24' color='#fff'/></a>
         <a href="https://www.instagram.com/hjunor_dev/" className='link-icon'> <Instagram size='24' color='#fff'/></a>
    
      </div>
      <label className="title">Vídeo recomendado ↓ </label>
      <div className="card-container">
        { /*eslint-disable-next-line*/ }
              <iframe width="560" height="315" src="https://www.youtube.com/embed/oUPaJxk6TZ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div className="btn-container">
        { data.map(d =>(
            <ButtonLink key={d.name} name={d.name} href={d.url} color={d.color} background={d.background} />
        ))}
      </div>
      </div>
      </div>
    </div>
  );
}

export default Canva;