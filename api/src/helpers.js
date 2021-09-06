module.exports = {
  formatToBrDate: (date) => {
    if (!date) {
      return null;
    }
    
    return new Date().toLocaleDateString('pt-BR');
  }
}