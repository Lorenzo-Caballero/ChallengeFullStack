const _private = new WeakMap();
// MODULO POO

class Password { //clase password 
    constructorPorParametro(longitud, password) {

        const properties = {
            _longitud: longitud,
            _password: password
        }
        _private.set(this, { properties });
    }

    constructorDefault() {
        this._longitud = 'longitu1';
        this._contraseña = 'programm1';
    }

    //metodos get && set 
    get getLongitud() {
        return _private.get(this).propieties['_longuitud'];
    }

    get getPassword() {
        return _private.get(this).propieties['_password'];
    }

    set setLongitud(newLongitud) {
        return _longitud.get(this).propieties['_longitud'] = newLongitud;
    }
    set setPassword(newPassword) {
        return _password.get(this).propieties['_password'] = newPassword;
    }

    }
    const Pass = new Password('longuitud','12345678');// instancia del objeto password pasando valores por parametros

        /*
    esfuerte(password, indice) {
        if (password.contraseña != String) {
            throw TypeError('El primer argumento debe ser una cadena de caracteres.');
        }
        if (typeof indice != ' numeber' || !Number.isInteger(indice)) {
            throw TypeError('El segundo argumento debe ser un numero entero');
        }
        return password.contraseña.charAt(indice.toUpperCase() === password.contraseña.charAt(indice);
    }
}*/