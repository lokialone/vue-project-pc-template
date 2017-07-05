ONLINE_PATH=ONLINE_PATH/{{ name }}
#远程服务器
REMOTE_SERVER=REMOTE_SERVER

SOURCE_FILES=./dist/*

help:
	@echo ""
	@echo "  make preview		# 预览发布内容--线上环境（不会执行发布）"
	@echo ""
	@echo "  make publish		# 发布到线上环境"

##############################
# 初始化 git 并推送到 gitlab
# ##############################
init-git:
	@git init
	@git remote add origin {{ name }}.git
	@git add .
	@git commit -m "init-{{ name }}"
	@git push -u origin master

##############################
# 预览发布文件
##############################
preview:
	@ssh $(REMOTE_SERVER) 'mkdir -p $(DEV_PATH)'
	@rsync -rvI -n --delete-after --progress $(SOURCE_FILES) $(REMOTE_SERVER):$(DEV_PATH)


##############################
# 发布
##############################
publish:
	@ssh $(REMOTE_SERVER) 'mkdir -p $(DEV_PATH)'
	rsync -rvI --delete-after --progress $(SOURCE_FILES) $(REMOTE_SERVER):$(DEV_PATH)
	@echo "Please visit http://f2e.souche.com/projects/{{ name }}"


.PHONY: publish preview init-git
