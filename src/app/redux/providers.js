'use client'
import { Provider } from 'react-redux';
import { store } from './store'; // Yahan `store` ka reference apne actual store se karo


// const Providers = ({ children }) => {
//     return <Provider store={store}>
//         {children}
//     </Provider>
// }

export function Providers({ children }) {
    return <Provider store={store}>
        {children}
    </Provider>

}