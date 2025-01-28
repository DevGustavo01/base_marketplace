Esse erro ocorre porque o Git está tentando autenticar automaticamente usando as credenciais de outro usuário (`giovannasalex`). Para corrigir isso e deixar o Bash acessível para qualquer usuário sem erros de permissão, siga as etapas abaixo:

---

## **1. Remova as Credenciais Armazenadas no Sistema**
   - O Windows salva credenciais Git, e você precisa removê-las para permitir que outros usuários façam login:
     1. **Abra o Gerenciador de Credenciais do Windows**:
        - Pressione `Win + S` e procure por **Gerenciador de Credenciais**.
        - Clique em **Credenciais do Windows**.
     2. **Localize e Remova as Credenciais do Git**:
        - Procure entradas como `git:https://github.com`.
        - Clique em **Remover** para apagar essas credenciais.

---

## **2. Atualize as Credenciais no Git**
   Após remover as credenciais, force o Git a pedir novas credenciais no próximo uso:
   1. Abra o terminal Bash.
   2. Digite:
      ```bash
      git credential-cache exit
      ```
   3. No próximo `git push` ou `git pull`, o Git solicitará novas credenciais. O usuário poderá inserir o nome de usuário e token pessoal (ou senha) apropriados.

---

## **3. Configure o Git para Usuários Diferentes (Opcional)**
   Se vários usuários compartilharem o Bash, você pode configurar o Git para pedir credenciais sempre, sem salvar:
   ```bash
   git config --global credential.helper ""
   ```

   Isso desabilita o cache de credenciais e permite que diferentes usuários façam login sempre que necessário.

---

## **4. Use SSH para Evitar Conflitos de Usuário (Recomendado)**
   Em vez de usar HTTPS com autenticação via credenciais, cada usuário pode configurar sua própria chave SSH para autenticação no GitHub:
   1. Gere uma chave SSH para cada usuário:
      ```bash
      ssh-keygen -t ed25519 -C "seu_email@exemplo.com"
      ```
   2. Adicione a chave SSH ao GitHub:
      - Copie a chave gerada:
        ```bash
        cat ~/.ssh/id_ed25519.pub
        ```
      - Adicione ao GitHub em **Settings > SSH and GPG keys**.
   3. Altere a URL remota do repositório para usar SSH:
      ```bash
      git remote set-url origin git@github.com:GiseleeT/base_marketplace.git
      ```

---

## **5. Verifique as Permissões no Repositório**
   O erro `Permission denied` indica que o usuário atual (`giovannasalex`) não tem permissão para acessar o repositório. Verifique se o usuário correto tem permissão:
   - No GitHub, vá até **Settings > Collaborators and Teams** no repositório e adicione o usuário com permissões adequadas.

---

Depois dessas etapas, o Bash estará configurado para uso aberto, sem conflitos de credenciais ou permissões. Se precisar de mais ajuda com as permissões ou configuração, avise!