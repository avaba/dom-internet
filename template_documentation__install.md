## Install

create ```*.sh``` -file and insert this code. Run and watch the magic...

```
echo -n "Set ProjectName="
read ProjectName
echo -n "Set RepoName="
read RepoName
echo -n "Set UserName="
read UserName
echo -n "Set UserPass="
read -s UserPass

mkdir ${ProjectName}
cd ${ProjectName}
git init
git remote add origin https://gitlab.com/webdev.gleb/front.template.git
git pull origin master
rm -rf .git

bower install
npm install

curl --user $UserName:$UserPass https://api.bitbucket.org/1.0/repositories/ \
--data is_private=true --data name=$RepoName

git init
git remote add origin https://${UserName}@bitbucket.org/${UserName}/${RepoName}.git
git add --all
git commit -m 'start'
git push origin master
gulp

```