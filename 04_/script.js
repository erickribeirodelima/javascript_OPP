let maquina = {
    material: "Aço Inox",
    equipamentos: ['motor', 'freio', 'cilindro', 'suspensão'],
    cor: "vermelho",
    numeroDeMotores: 1,
    vemMontada: false,
};

console.log(maquina['material']);
console.log(maquina.equipamentos[0]);  // motor
console.log(maquina.cor);

for(let i = 0; i < maquina.equipamentos.length; i++){
    console.log(maquina.equipamentos[i]);
}

if(maquina.vemMontada === false){
    console.log("O comprador tem que montar.");
}