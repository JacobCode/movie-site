(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/movie-ticket-icon.20a2e103.svg"},137:function(e,t,a){e.exports=a.p+"static/media/movie-db-logo.02a9430b.svg"},148:function(e,t,a){e.exports=a(354)},176:function(e,t,a){},289:function(e,t,a){},319:function(e,t,a){},330:function(e,t,a){},333:function(e,t,a){},336:function(e,t,a){},339:function(e,t,a){},347:function(e,t,a){},351:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),i=a(11),l=a(12),s=a(14),m=a(13),u=a(15),d=a(25),p=a(356),v=a(357),h=a(355),g=a(61),E=a(8),b=a(30),f=a(134),O=a.n(f),y=a(130),M=a.n(y),j=a(21),S=a.n(j),w=a(41),N=a.n(w),k=a(42),_=a.n(k),T=a(62),I=a.n(T),C=a(63),V=a.n(C),D=a(132),R=a.n(D),U=a(64),A=a.n(U),x=a(131),G=a.n(x),P=a(133),L=a.n(P),W=a(40),B=a.n(W),H=a(358),z=a(27),F=a.n(z),K="api_key=b74e9e633dbb1ff6742cdbedaa08687d",J="https://api.themoviedb.org/3",X=function(){return function(e){F.a.get("".concat(J,"/movie/popular?").concat(K,"&sort_by=popularity.desc&language=en-US&page=1")).then(function(t){e({type:"POPULAR_MOVIES",payload:t.data.results})})}},q=function(){return function(e){F.a.get("".concat(J,"/discover/movie?certification_country=US&certification=R&").concat(K,"&language=en-US&page=1")).then(function(t){e({type:"R_MOVIES",payload:t.data.results})})}},Q=function(e){return function(t){F.a.get("".concat(J,"/movie/").concat(e,"?").concat(K,"&language=en-US&page=1")).then(function(e){t({type:"GET_MOVIE",payload:e.data})})}},Y=function(e){return function(t){F.a.get("".concat(J,"/movie/").concat(e,"/videos?").concat(K,"&language=en-US")).then(function(e){t({type:"GET_VIDEOS",payload:e.data.results})})}},$=function(e){return function(t){F.a.get("".concat("http://www.omdbapi.com","/?i=").concat(e,"&").concat("apikey=5d02e9db")).then(function(e){t({type:"GET_IMDB",payload:e.data})})}},Z=function(e){return function(t){if(e.length>1&&void 0!==e){var a=[];e.forEach(function(e){e=e.split(" ").join("+"),fetch("".concat("http://api.themoviedb.org/3/search/person?").concat("api_key=b74e9e633dbb1ff6742cdbedaa08687d","&query=").concat(e)).then(function(e){return e.json()}).then(function(e){void 0!==e.results[0]&&a.push(e.results[0].profile_path)})}),t({type:"GET_ACTORS",payload:a})}}},ee=function(e){return function(t){t({type:"TOGGLE_MOVIE",payload:e})}},te=a(129),ae=a.n(te),ne=(a(176),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).toggleDrawer=function(t,a){return function(){e.setState(Object(g.a)({},t,a))}},e.state={left:!1,searchInputValue:""},e.toggleDrawer=e.toggleDrawer.bind(Object(E.a)(Object(E.a)(e))),e.handleSearchChange=e.handleSearchChange.bind(Object(E.a)(Object(E.a)(e))),e.handleSearch=e.handleSearch.bind(Object(E.a)(Object(E.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleSearchChange",value:function(e){this.setState({searchInputValue:e.target.value})}},{key:"handleSearch",value:function(e){e.preventDefault(),this.state.searchInputValue.length>0&&(this.props.searchMovies(this.state.searchInputValue),this.props.history.push("/search"))}},{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement("div",{className:e.list},r.a.createElement(M.a,null,r.a.createElement(N.a,{button:!0,component:"a",href:"/"},r.a.createElement(_.a,{primary:"Home"})),r.a.createElement(N.a,{button:!0,component:"a",href:"/tvshows"},r.a.createElement(_.a,{primary:"TV Shows"})),r.a.createElement(N.a,{button:!0,component:"a",href:"/discover"},r.a.createElement(_.a,{primary:"Discover Movies"})),r.a.createElement(N.a,{button:!0,component:"a",href:"/search"},r.a.createElement(_.a,{primary:"Search Movies"})),r.a.createElement(S.a,null),r.a.createElement(N.a,{button:!0},r.a.createElement(_.a,{primary:r.a.createElement("div",{id:"closeNav"},"Close",r.a.createElement(B.a,null))}))));return r.a.createElement("div",{id:"navigation"},r.a.createElement(I.a,{color:"primary",className:"appbar",position:"static"},r.a.createElement(V.a,{className:"toolbar"},r.a.createElement("div",{className:"brand"},r.a.createElement(A.a,{onClick:this.toggleDrawer("left",!0),color:"inherit","aria-label":"Open drawer"},r.a.createElement(G.a,null)),r.a.createElement("h1",null,"MoviePro ",r.a.createElement("img",{src:ae.a,alt:"Movie Ticket"}))),r.a.createElement("form",{onSubmit:this.handleSearch,className:"search"},r.a.createElement(R.a,{onChange:this.handleSearchChange,placeholder:"Search Movies",required:!0}),r.a.createElement(L.a,{onClick:this.handleSearch})))),r.a.createElement(O.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},t)))}}]),t}(n.Component)),re=Object(d.b)(function(e){return{searchOutput:e.movies.searchOutput}},{searchMovies:function(e){return function(t){var a=String(e).replace(/\s/g,"%20");F.a.get("".concat(J,"/search/movie?").concat(K,"&language=en-US&query=").concat(a,"&page=1&include_adult=false")).then(function(e){t({type:"SEARCH_MOVIES",payload:e.data.results})})}}})(Object(H.a)(Object(b.withStyles)({list:{width:250},fullList:{width:"auto"}})(ne))),oe=a(137),ce=a.n(oe),ie=(a(289),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col info"},r.a.createElement("p",null,"All Movie and TV Show images, videos, and other data is provided by ",r.a.createElement("a",{href:"https://www.themoviedb.org/"},"TheMovieDB"),"."),r.a.createElement("img",{src:ce.a,alt:"MovieDB Logo"})),r.a.createElement("div",{className:"col links"},r.a.createElement("h6",null,"Links"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"TV Shows")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Discover Movies")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Search Movies")))),r.a.createElement("div",{className:"col contact"},r.a.createElement("h6",null,"Contact"),r.a.createElement("ul",null,r.a.createElement("li",null,"Portfolio: ",r.a.createElement("a",{href:"https://jacobcode.github.io/portfolio/"},"Jacob Carver")),r.a.createElement("li",null,"GitHub: ",r.a.createElement("a",{href:"https://github.com/JacobCode"},"JacobCode"))))))}}]),t}(n.Component)),le=a(138),se=a.n(le),me=a(139),ue=a(141),de=a.n(ue),pe=a(32),ve=a.n(pe),he=a(88),ge=a.n(he),Ee=a(89),be=a.n(Ee),fe=a(140),Oe=a.n(fe),ye=a(67),Me=a.n(ye),je=(a(319),Object(me.autoPlay)(se.a)),Se=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleNext=function(){e.setState(function(e){return{activeStep:e.activeStep+1}})},e.handleBack=function(){e.setState(function(e){return{activeStep:e.activeStep-1}})},e.handleStepChange=function(t){e.setState({activeStep:t})},e.state={activeStep:0},e.viewMovie=e.viewMovie.bind(Object(E.a)(Object(E.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.getUpcomingMovies(),this.props.getGenres()}},{key:"viewMovie",value:function(e){var t=this;this.props.getMovie(e.target.dataset.id),this.props.getVideos(e.target.dataset.id),setTimeout(function(){t.props.getImdbData(t.props.chosenMovie.imdb_id),t.props.toggleMovie(!0),setTimeout(function(){t.props.getActors(Array(t.props.currentImdbData.Actors).join().split(","))},100)},500)}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,o=this.state.activeStep,c=this.props.upcomingMovies.length;return r.a.createElement("div",{id:"carousel"},r.a.createElement("h1",null,"Upcoming Releases"),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement("div",{className:a.root},r.a.createElement(je,{axis:"rtl"===n.direction?"x-reverse":"x",index:o,interval:1e4,onChangeIndex:this.handleStepChange,enableMouseEvents:!0},this.props.upcomingMovies.map(function(t,a){var n=[];e.props.genres.forEach(function(e){t.genre_ids.forEach(function(t){t===e.id&&n.push(e.name)})});var c=n.map(function(e,t){return r.a.createElement(Oe.a,{key:t,label:e,className:"genre"})});return r.a.createElement("div",{className:"sliding-content",key:a},Math.abs(o-a)<=2?r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{"data-id":t.id,onClick:e.viewMovie,className:"img",style:{backgroundImage:"url('".concat("http://image.tmdb.org/t/p/w500","/").concat(t.poster_path,"')")}})):null,r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,t.title," ",r.a.createElement("span",null,!0===t.adult?"R":"PG-13")),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"date"},t.release_date.substr(0,4))," \u2022 ",r.a.createElement("span",{className:"rating"},t.vote_average>0?"".concat(t.vote_average," / 10"):"Not Rated",r.a.createElement(Me.a,null))),r.a.createElement("p",{className:"plot"},t.overview),r.a.createElement("div",{className:"genres"},c),r.a.createElement(ve.a,{"data-id":t.id,"data-imdb_id":t.imdb_id,onClick:e.viewMovie,variant:"contained",color:"secondary"},r.a.createElement("span",{"data-id":t.id,"data-imdb_id":t.imdb_id},"View More"))))})),r.a.createElement(de.a,{steps:c,position:"static",activeStep:o,className:a.mobileStepper,nextButton:r.a.createElement(ve.a,{size:"small",onClick:this.handleNext,disabled:o===c-1},"Next","rtl"===n.direction?r.a.createElement(ge.a,null):r.a.createElement(be.a,null)),backButton:r.a.createElement(ve.a,{size:"small",onClick:this.handleBack,disabled:0===o},"rtl"===n.direction?r.a.createElement(be.a,null):r.a.createElement(ge.a,null),"Prev")})))}}]),t}(n.Component),we=Object(d.b)(function(e){return{upcomingMovies:e.movies.upcomingMovies,chosenMovie:e.movies.chosenMovie,currentImdbData:e.movies.currentImdbData,genres:e.movies.genres,actors:e.movies.actors}},{getUpcomingMovies:function(){return function(e){F.a.get("".concat(J,"/movie/upcoming?").concat(K,"&language=en-US")).then(function(t){e({type:"UPCOMING_MOVIES",payload:t.data.results})})}},getMovie:Q,getVideos:Y,getGenres:function(){return function(e){F.a.get("".concat(J,"/genre/movie/list?").concat(K)).then(function(t){e({type:"GENRES",payload:t.data.genres})})}},getImdbData:$,getActors:Z,toggleMovie:ee})(Object(b.withStyles)(function(e){return{root:{maxWidth:400,flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:4*e.spacing.unit,backgroundColor:e.palette.background.default},img:{height:"255",display:"block",overflow:"hidden",width:"100%"}}},{withTheme:!0})(Se)),Ne=(a(330),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).selectMovie=e.selectMovie.bind(Object(E.a)(Object(E.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.getFutureMovies(),this.props.getPopularMovies(),this.props.getRMovies(),this.props.getKidsMovies()}},{key:"selectMovie",value:function(e){var t=this;this.props.getMovie(e.target.dataset.id),this.props.getVideos(e.target.dataset.id),setTimeout(function(){t.props.getImdbData(t.props.chosenMovie.imdb_id),t.props.toggleMovie(!0),setTimeout(function(){t.props.getActors(Array(t.props.currentImdbData.Actors).join().split(","))},100)},500)}},{key:"render",value:function(){var e=this,t="http://image.tmdb.org/t/p/w300",a=this.props,n=a.futureMovies,o=a.kidsMovies,c=a.rMovies,i=a.popularMovies;return r.a.createElement("div",{id:"movie-categories"},r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Popular Movies"),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement("div",{className:"movies"},i.map(function(a,n){return r.a.createElement("div",{className:"slide",key:n},r.a.createElement("div",{className:"movie"},r.a.createElement("div",{"data-id":a.id,onClick:e.selectMovie,style:{backgroundImage:"url('".concat(t,"/").concat(a.poster_path,"')")},className:"img"}),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,a.title),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement("p",null,a.release_date.substr(0,4)))))}))),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Top Rated R Movies"),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement("div",{className:"movies"},c.map(function(a,n){return r.a.createElement("div",{className:"slide",key:n},r.a.createElement("div",{className:"movie"},r.a.createElement("div",{"data-id":a.id,onClick:e.selectMovie,style:{backgroundImage:"url('".concat(t,"/").concat(a.poster_path,"')")},className:"img"}),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,a.title),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement("p",null,a.release_date.substr(0,4)))))}))),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Top Rated Kids Movies"),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement("div",{className:"movies"},o.map(function(a,n){return r.a.createElement("div",{className:"slide",key:n},r.a.createElement("div",{className:"movie"},r.a.createElement("div",{"data-id":a.id,onClick:e.selectMovie,style:{backgroundImage:"url('".concat(t,"/").concat(a.poster_path,"')")},className:"img"}),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,a.title),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement("p",null,a.release_date.substr(0,4)))))}))),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Future Movies"),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement("div",{className:"movies"},n.map(function(a,n){return r.a.createElement("div",{className:"slide",key:n},r.a.createElement("div",{className:"movie"},r.a.createElement("div",{"data-id":a.id,onClick:e.selectMovie,style:{backgroundImage:null!==a.poster_path?"url('".concat(t,"/").concat(a.poster_path,"')"):"url('https://happytoothnc.com/wp-content/uploads/2016/10/orionthemes-placeholder-image-1.jpg')"},className:"img"}),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,a.title),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement("p",null,a.release_date.substr(0,4)))))}))))}}]),t}(n.Component)),ke=Object(d.b)(function(e){return{popularMovies:e.movies.popularMovies,futureMovies:e.movies.futureMovies,currentVideos:e.movies.currentVideos,currentImdbData:e.movies.currentImdbData,chosenMovie:e.movies.chosenMovie,rMovies:e.movies.rMovies,kidsMovies:e.movies.kidsMovies,actors:e.movies.actors}},{getPopularMovies:X,getFutureMovies:function(){return function(e){var t=new Date,a="".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDate());F.a.get("".concat(J,"/discover/movie?primary_release_date.gte=").concat(a,"&primary_release_date.lte=").concat(a,"&").concat(K,"&language=en-US")).then(function(t){e({type:"FUTURE_MOVIES",payload:t.data.results})})}},getRMovies:q,getKidsMovies:function(){return function(e){F.a.get("".concat(J,"/discover/movie?certification_country=US&certification=G&").concat(K,"&language=en-US&page=1")).then(function(t){e({type:"KIDS_MOVIES",payload:t.data.results})})}},getVideos:Y,getMovie:Q,getImdbData:$,getActors:Z,toggleMovie:ee})(Ne),_e=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"Discover"},r.a.createElement(we,null),r.a.createElement(ke,null))}}]),t}(n.Component),Te=(a(333),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"home"},r.a.createElement("div",{className:"container main"},r.a.createElement("a",{href:"/tvshows",className:"tv"},r.a.createElement("div",null),r.a.createElement("span",null,"TV Shows")),r.a.createElement("a",{href:"/discover",className:"movies"},r.a.createElement("div",null),r.a.createElement("span",null,"Movies"))))}}]),t}(n.Component)),Ie=(a(336),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.getTvShows()}},{key:"render",value:function(){var e=this.props.tvShows;return r.a.createElement("div",{id:"tv-shows"},r.a.createElement("h1",null,"Popular TV SHOWS"),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement("div",{className:"container"},e.map(function(e,t){return r.a.createElement("div",{className:"show",key:t},r.a.createElement("h4",null,e.name),r.a.createElement("img",{src:"".concat("http://image.tmdb.org/t/p/w500").concat(e.poster_path)}),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"rating"},e.vote_average>0?"".concat(e.vote_average):"NR"," ",r.a.createElement(Me.a,null)),"\u2022",r.a.createElement("span",{className:"air-date"},e.first_air_date.substr(0,4))))})))}}]),t}(n.Component)),Ce=Object(d.b)(function(e){return{tvShows:e.movies.tvShows}},{getTvShows:function(){return function(e){F.a.get("".concat(J,"/discover/tv?").concat(K,"&language=en-US&sort_by=popularity.desc&page=1&with_original_language=en")).then(function(t){e({type:"GET_TV_SHOWS",payload:t.data.results})})}}})(Ie),Ve=(a(339),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={},e.selectMovie=e.selectMovie.bind(Object(E.a)(Object(E.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"selectMovie",value:function(e){var t=this;this.props.getMovie(e.target.dataset.id),this.props.getVideos(e.target.dataset.id),setTimeout(function(){t.props.getImdbData(t.props.chosenMovie.imdb_id),t.props.toggleMovie(!0),setTimeout(function(){t.props.getActors(Array(t.props.currentImdbData.Actors).join().split(","))},100)},500)}},{key:"render",value:function(){var e=this,t=this.props.searchOutput;return this.props.searchOutput.length>0?r.a.createElement("div",{id:"search-results"},r.a.createElement("h1",null,"Search Results"),r.a.createElement(S.a,{variant:"fullWidth"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"movies"},t.map(function(t,a){return r.a.createElement("div",{key:a,className:"movie"},r.a.createElement("div",{"data-id":t.id,onClick:e.selectMovie,style:{backgroundImage:null!==t.poster_path?"url('".concat("http://image.tmdb.org/t/p/w500","/").concat(t.poster_path,"')"):"url('https://happytoothnc.com/wp-content/uploads/2016/10/orionthemes-placeholder-image-1.jpg')"},className:"img"}),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,t.title),r.a.createElement(S.a,{variant:"fullWidth"}),r.a.createElement("p",null,t.release_date.substr(0,4))))})),r.a.createElement("span",null,"Results: ",t.length))):r.a.createElement("div",{id:"no-results"},r.a.createElement("h1",null,"NO RESULTS..."))}}]),t}(n.Component)),De=Object(d.b)(function(e){return{chosenMovie:e.movies.chosenMovie,currentImdbData:e.movies.currentImdbData,actors:e.movies.actors,searchOutput:e.movies.searchOutput}},{getMovie:Q,getVideos:Y,getImdbData:$,getActors:Z,toggleMovie:ee})(Ve),Re=a(143),Ue=a.n(Re),Ae=a(58),xe=a.n(Ae),Ge=a(59),Pe=a.n(Ge),Le=a(90),We=a.n(Le),Be=a(142),He=a.n(Be),ze=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={openError:!0,openTrailer:!1,vertical:"bottom",horizontal:"left"},a.closeError=a.closeTrailer.bind(Object(E.a)(Object(E.a)(a))),a.openError=a.closeTrailer.bind(Object(E.a)(Object(E.a)(a))),a.closeTrailer=a.closeTrailer.bind(Object(E.a)(Object(E.a)(a))),a.openTrailer=a.openTrailer.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.openTrailer?this.openTrailer():e.openError&&this.openError()}},{key:"openTrailer",value:function(){this.setState({openTrailer:!0})}},{key:"closeTrailer",value:function(){this.setState({openTrailer:!1})}},{key:"openError",value:function(){this.setState({openError:!0}),console.log("OPEN")}},{key:"closeError",value:function(){this.setState({openError:!1})}},{key:"render",value:function(){var e=this.state,t=e.vertical,a=e.horizontal;return void 0!==this.props.video?r.a.createElement(We.a,{id:"snackbar",anchorOrigin:{vertical:t,horizontal:a},open:this.state.openTrailer,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"Trailer")},r.a.createElement("div",{className:"trailer"},r.a.createElement(ve.a,{onClick:this.closeTrailer,variant:"contained"},r.a.createElement(B.a,null)),r.a.createElement("iframe",{title:"ytplayer",id:"message-id",type:"text/html",width:"650",height:"350",allow:"autoplay; fullscreen",src:void 0!==this.props.video.key?"https://www.youtube.com/embed/".concat(this.props.video.key,"?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1"):"",frameBorder:"0"}))):r.a.createElement(We.a,{id:"error-snackbar",anchorOrigin:{vertical:t,horizontal:a},open:this.state.openError,onClose:this.handleClose,ContentProps:{"aria-describedby":"error-id"},message:r.a.createElement("span",{id:"error-id"},"No Video Available ",r.a.createElement(He.a,null))})}}]),t}(n.Component);a(347);function Fe(e){return r.a.createElement(Pe.a,Object.assign({direction:"up"},e))}var Ke=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={open:a.props.isToggled,POSTER_URL:"http://image.tmdb.org/t/p/w500",isLoading:!1,openTrailer:!1,openError:!1},a.getVideos=function(){a.setState({openTrailer:!0,openError:!0})},a.handleClose=function(){a.setState({open:!1,isLoading:!1,openTrailer:!1,openError:!1})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;e&&(setTimeout(function(){t.setState({isLoading:!1})},500),this.setState({open:this.props.isToggled,isLoading:!0}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.chosenMovie,o=t.actors.map(function(t,a){return r.a.createElement("div",{key:a,className:"image-container"},r.a.createElement("div",{style:{backgroundImage:"url('".concat(null!==t&&t.length>0?e.state.POSTER_URL+t:"http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg","')")},className:"actor-img"}))});return r.a.createElement("div",{id:"movie-info"},r.a.createElement(Ue.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:Fe,id:"dialog"},r.a.createElement(I.a,{id:"app-bar",className:a.appBar},r.a.createElement(V.a,{id:"tool-bar"},r.a.createElement(A.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},r.a.createElement(B.a,null)),r.a.createElement(xe.a,{component:"a",href:n.homepage,color:"inherit",className:a.flex},this.props.currentImdbData.Title))),r.a.createElement("div",{className:"cover",style:{backgroundImage:"url('".concat(this.state.POSTER_URL,"/").concat(n.backdrop_path,"')")}}),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"poster-container"},r.a.createElement("div",{className:"poster",style:{backgroundImage:"url('".concat(this.state.POSTER_URL,"/").concat(n.poster_path,"')")}}),r.a.createElement(ve.a,{onClick:this.getVideos,variant:"contained",color:"secondary"},"Watch Trailer")),r.a.createElement("div",{className:"movie-info"},r.a.createElement("p",{className:"runtime-date"},r.a.createElement("span",null,this.props.currentImdbData.Rated)," \u2022 ",n.runtime," min"),r.a.createElement("p",{className:"overview"},n.overview),r.a.createElement("p",{className:"tagline"},void 0!==n.tagline&&n.tagline.length>0?"- ".concat(n.tagline):""),r.a.createElement("div",{className:"info"}),r.a.createElement("div",{className:"actors-container"},r.a.createElement("h1",null,"Actors"),r.a.createElement("div",{className:"actors-list"},r.a.createElement("div",{className:"actor"},r.a.createElement("div",{className:"images"},o))))))),r.a.createElement(S.a,{variant:"middle"}),r.a.createElement(ze,{video:this.props.currentVideos[0],openTrailer:this.state.openTrailer,openError:this.state.openError})))}}]),t}(n.Component),Je=Object(d.b)(function(e){return{chosenMovie:e.movies.chosenMovie,currentVideos:e.movies.currentVideos,currentImdbData:e.movies.currentImdbData,actorImages:e.movies.actorImages,actors:e.movies.actors,isToggled:e.movies.isToggled}},{getPopularMovies:X,getRMovies:q,getVideos:Y,getMovie:Q,getImdbData:$,getActors:Z,getImages:function(e){return function(t){t({type:"ACTOR_IMAGES",payload:e})}}})(Object(b.withStyles)({appBar:{position:"relative"},flex:{flex:1}})(Ke)),Xe=a(31),qe=a(144),Qe=a(24),Ye={searchOutput:[],moviesInTheatres:[],upcomingMovies:[],popularMovies:[],futureMovies:[],rMovies:[],kidsMovies:[],chosenMovie:{},currentVideos:[],tvShows:[],currentImdbData:{},actorImages:"",genres:[],actors:[],isToggled:!1},$e=Object(Xe.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPCOMING_MOVIES":return Object(Qe.a)({},e,{upcomingMovies:t.payload});case"FUTURE_MOVIES":return Object(Qe.a)({},e,{futureMovies:t.payload});case"POPULAR_MOVIES":return Object(Qe.a)({},e,{popularMovies:t.payload});case"R_MOVIES":return Object(Qe.a)({},e,{rMovies:t.payload});case"KIDS_MOVIES":return Object(Qe.a)({},e,{kidsMovies:t.payload});case"GET_MOVIE":return Object(Qe.a)({},e,{chosenMovie:t.payload});case"GET_VIDEOS":return Object(Qe.a)({},e,{currentVideos:t.payload});case"GENRES":return Object(Qe.a)({},e,{genres:t.payload});case"GET_IMDB":return Object(Qe.a)({},e,{currentImdbData:t.payload});case"ACTOR_IMAGES":return Object(Qe.a)({},e,{actorImages:t.payload});case"GET_ACTORS":return Object(Qe.a)({},e,{actors:t.payload});case"TOGGLE_MOVIE":return Object(Qe.a)({},e,{isToggled:t.payload});case"SEARCH_MOVIES":return Object(Qe.a)({},e,{searchOutput:t.payload});case"GET_TV_SHOWS":return Object(Qe.a)({},e,{tvShows:t.payload});default:return e}}}),Ze=[qe.a],et=Object(Xe.e)($e,{},Object(Xe.d)(Xe.a.apply(void 0,Ze),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),tt=(a(351),a(145)),at=a.n(tt),nt=a(146),rt=a.n(nt),ot=a(87),ct=a.n(ot),it=Object(b.createMuiTheme)({palette:{primary:at.a,secondary:rt.a},typography:{useNextVariants:!0}}),lt=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:et},r.a.createElement(p.a,null,r.a.createElement(ct.a,{theme:it},r.a.createElement("div",{className:"App"},r.a.createElement(re,null),r.a.createElement(v.a,null,r.a.createElement(h.a,{path:"/",component:Te,exact:!0}),r.a.createElement(h.a,{path:"/discover",component:_e,exact:!0}),r.a.createElement(h.a,{path:"/tvshows",component:Ce,exact:!0}),r.a.createElement(h.a,{path:"/search",component:De,exact:!0})),r.a.createElement(ie,null),r.a.createElement(Je,null)))))}}]),t}(n.Component),st=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function mt(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(lt,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");st?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):mt(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):mt(e)})}}()}},[[148,2,1]]]);
//# sourceMappingURL=main.dacf6240.chunk.js.map