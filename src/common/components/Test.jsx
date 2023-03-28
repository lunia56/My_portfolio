import { motion } from "framer-motion";
//

const MyComponent = () => {
    return (
        <motion.span
            style={{
                width: "100%",
                height: "30px",
                backgroundColor: "gray",
                position: "relative"
            }}
            children={'Hello World'}
            whileHover={{
                width: '100%',

                backgroundColor: "green",
                transition: { duration: 10 }
            }}
            initial={{
                width: '100%',
                backgroundColor: "red",
                transition: {  opacity:0, duration: 0.5 }
            }}
            animate={{
                width: 3,
                backgroundColor: "gray",
                transition: { opacity:1,duration: 0.5 }
            }}
        />
    );
};

export default MyComponent;






