import Link from 'next/link';
import { useSignout, useUser } from '../hooks/user';


const Navbar = () => {
        const user = useUser();
        const signout = useSignout();
    // const [user, setUser] = useState();
    // useEffect(()=> {
    //     (async ()=> {
    //         try {
    //             const user = await fetchJson('/api/user');
    //             setUser(user)
    //         } catch (error) {
    //             //not signed in 
    //         }
            
    //     })()
    // }, [])

    const handleSignOut = async ()=> {
         signout();
        //  setUser(undefined); //re-set the state and rerender the page
    }
    console.log('[Navbar]', user)

  return (
      <nav className = 'px-2 '>
          <ul className='flex gap-2'>
              <li className="text-lg font-extrabold">
                  <Link href="/">
                      <a>
                          Next Shop 
                      </a>
                  </Link>
              </li>
              <li role='separator' className='flex-1'></li>
              {user ? 
              <>
              
                <li className='text-orange-700 '>
                    {user.name}
                </li>
               <li>
                   <Link href='/cart'>
                      <a>
                          Cart
                      </a>
                   </Link>
               </li>
                <li>
                    <button onClick= {handleSignOut} >
                    Sign Out
                    </button>
                </li> 
              </> : 
              <li>
                  <Link href="/signIn">
                      <a>
                          Sign In
                      </a>
                  </Link>
              </li>
              }
             
          </ul>
      </nav>
  )
};

export default Navbar;
