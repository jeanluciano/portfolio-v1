export default function chooseDirection  (prev, current)  {
   
    if(prev === '/' && current === '/work'){
        return ['matrix(1.00,0.00,0.00,1.00,-50,50','matrix(1.00,0.00,0.00,1.00,0,0)']
    } else if (prev=== "/about" && current==="/contact"){
        return ['matrix(1.00,0.00,0.00,1.00,50,50','matrix(1.00,0.00,0.00,1.00,0,0)'] 
    }else if (prev=== "/work" && current==='/'){
        return ['matrix(1.00,0.00,0.00,1.00,50,-50','matrix(1.00,0.00,0.00,1.00,0,0)'] 
    } else if (prev === '/contact' && current === '/about') {
        return ['matrix(1.00,0.00,0.00,1.00,-50,-50','matrix(1.00,0.00,0.00,1.00,0,0)']
    }
     else if (prev === '/' && current === '/about') {
        return ['matrix(1.00,0.00,0.00,1.00,-50,0','matrix(1.00,0.00,0.00,1.00,0,0)']
    } else if (prev === '/' && current === '/contact') {
        return ['matrix(1.00,0.00,0.00,1.00,0,50','matrix(1.00,0.00,0.00,1.00,0,0)']
    } 
    else if (prev === '/about' && current === '/work') {
        return ['matrix(1.00,0.00,0.00,1.00,0,50','matrix(1.00,0.00,0.00,1.00,0,0)']
    } else if (prev === '/about' && current === '/') {
        return ['matrix(1.00,0.00,0.00,1.00,50,0','matrix(1.00,0.00,0.00,1.00,0,0)']
    }
     else if (prev === '/work' && current === '/about') {
        return ['matrix(1.00,0.00,0.00,1.00,0,-50','matrix(1.00,0.00,0.00,1.00,0,0)']
    } else if (prev === '/work' && current === '/contact') {
        return ['matrix(1.00,0.00,0.00,1.00,50,0','matrix(1.00,0.00,0.00,1.00,0,0)']
    }
     else if (prev === '/contact' && current === '/work') {
        return ['matrix(1.00,0.00,0.00,1.00,-50,0','matrix(1.00,0.00,0.00,1.00,0,0)']
    } else if (prev === '/contact' && current === '/') {
        return ['matrix(1.00,0.00,0.00,1.00,0,-50','matrix(1.00,0.00,0.00,1.00,0,0)']
    } else {
        return ['matrix(1.00,0.00,0.00,1.00,0,0)','matrix(1.00,0.00,0.00,1.00,0,0)']
    }

  }