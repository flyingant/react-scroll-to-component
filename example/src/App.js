import React, { Component } from 'react';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';

class App extends React.Component {

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  render() {
    return (
      <div className='main'>
        <div className='button_group'>
          <button onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500})}>Go To Violet</button>
          <button onClick={() => scrollToComponent(this.Indigo, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}>Go To Indigo</button>
          <button onClick={() => scrollToComponent(this.Blue, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>Go To Blue</button>
          <button onClick={() => scrollToComponent(this.Green, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'})}>Go To Green</button>
          <button onClick={() => scrollToComponent(this.Yellow, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Go To Yellow</button>
          <button onClick={() => scrollToComponent(this.Orange, { offset: 0, align: 'top', duration: 500, ease:'inCirc'})}>Go To Orange</button>
          <button onClick={() => scrollToComponent(this.Red, { offset: 0, align: 'top', duration: 500})}>Go To Red</button>
        </div>
        <section className='violet' ref={(section) => { this.Violet = section; }}>Violet</section>
        <section className='indigo' ref={(section) => { this.Indigo = section; }}>Indigo</section>
        <section className='blue' ref={(section) => { this.Blue = section; }}>Blue</section>
        <section className='green' ref={(section) => { this.Green = section; }}>Green</section>
        <section className='yellow' ref={(section) => { this.Yellow = section; }}>Yellow</section>
        <section className='orange' ref={(section) => { this.Orange = section; }}>Orange</section>
        <section className='red' ref={(section) => { this.Red = section; }}>Red</section>
        <b>Inspired By <a href="https://hopechen1028.github.io/hopechen.me/" target="_blank">Hope</a> with Love and Peace</b>
      </div>
    )
  }
}

export default App;
