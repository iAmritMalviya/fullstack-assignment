import React from 'react'

import { FormControl, FormLabel, Input, InputGroup, InputLeftElement,InputRightElement } from '@chakra-ui/react'

const FormInput = ({ label, icon, type, placeholder, minlen, maxlen, name, value, handleChange, my = '4', css, outline = 'salmon', border = '0.5px solid', w='80%',mx='auto',borderRadius='12px',onEnter }) => {
    
    return (
        <>
            <FormControl isRequired my={my} w={w} mx={mx}>

                {label && <FormLabel> {label}: </FormLabel>}

                <InputGroup>

                    <Input  css={css} onKeyDown={onEnter}  borderRadius={borderRadius} type={type} placeholder={placeholder} minLength={minlen} maxLength={maxlen} value={value} onChange={handleChange} name={name} id={name} outline={outline} border={border} />
                    <InputRightElement pointerEvents='none'> {icon} </InputRightElement>


                </InputGroup>

            </FormControl>
        </>
    )
}

export default FormInput