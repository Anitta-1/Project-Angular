import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Cloud } from './pages/cloud/cloud';
import { Cyber } from './pages/cyber/cyber';
import { Data } from './pages/data/data';
import { Devops } from './pages/devops/devops';



export const routes: Routes = [{path :'',component:Home},{path: 'services',component:Services},{path:'contact',component:Contact},{path:'about',component:About},{path:'services/cloud',component:Cloud},{path:'services/cyber',component:Cyber},{path:'services/data',component:Data},
    {path:'services/devops',component:Devops}
];
