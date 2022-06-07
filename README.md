# Proyecto ReservaDapp

- Home
- About
- Crear Lugar
- Lugares
- FAQ

### Necesarios 
Vue

Metamask

### Instalar dependencias del front
```
cd packages
cd frontend
npm i --only=production
```

### Instalar dependencias de back
```
cd packages
cd hardhat
npm i --only=production
```

### Agregar ETH en Chainlink (faucets.chain.link/goerli)

### Levantar Hardhat
```
cd packages
cd hardhat
npx hardhat node
```

### Compilar y deploy de contratos
```
cd packages
cd hardhat
npx hardhat run ./scripts/deploy.js --network localhost
```
Copiar address de contrato de Market al .env de la carpeta del front y cambiar abi

### Levantar Frontend
```
cd packages
cd frontend
npm run dev
```

## Authors

- [@AgostinaLuciano](https://www.github.com/AgostinaLuciano)
- [@Fedejamus](https://www.github.com/Fedejamus)
- [@juanmartinez-19](https://www.github.com/juanmartinez-19)
- [@parisote](https://www.github.com/parisote)
- [@termoit](https://www.github.com/termoit)
